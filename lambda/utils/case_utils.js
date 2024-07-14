const fs = require('fs');

exports.caseExists = (case_name) => {
    const files = fs.readdirSync('./data/cases/'); // relative to index.js
    return Promise.resolve(files.includes(`${case_name}.js`));
}

/* ======== ======== ======== ======== */

const Range = require('./classes/range.js');

function getOdds(case_obj) {
    let odds = {};

    odds['Mil-Spec'] = new Range(0, 0.79923273657289);
    odds['Restricted'] = new Range(0.79923273657289, 0.959079283887468);
    odds['Classified'] = new Range(0.959079283887468, 0.9910485933503836);
    odds['Covert'] = new Range(0.9910485933503836, 0.9974424552429667);

    /* -------- -------- */

    const gold_rarity = 'Covert[knife]' in case_obj ? 'Covert[knife]' : 'Extraordinary[Gloves]';
    
    odds[gold_rarity] = new Range(0.9974424552429667, 1);

    /* -------- -------- */

    return Promise.resolve(odds);
}

/* ======== ======== ======== ======== */

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* -------- -------- */

const wearLevel = require('./wear_level.js');

exports.openCase = async (case_name) => {
    const case_obj = require(`../data/cases/${case_name}.js`);
    
    /* -------- -------- */
    
    const odds = await getOdds(case_obj);
    const rand = Math.random();
    
    for(const rarity in case_obj) {
        if(odds[rarity].inRange(rand)) {
            const item = randomItem(case_obj[rarity]);
            
            /* -------- -------- */

            const wear = item.wear_limits.random();
            
            let wear_level = ''; // default: Vanilla
            await wearLevel(wear).then((result) => {wear_level = result}, (error) => {});
            
            /* -------- -------- */
            
            if(rarity !== 'Extraordinary[Gloves]' && Math.random() < 0.1) {
                return Promise.resolve(`${wear_level} StatTrak ${item.name}`.trim());
            }
            
            return Promise.resolve(`${wear_level} ${item.name}`.trim());
        }
    }
}