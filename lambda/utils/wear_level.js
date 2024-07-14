const Range = require('./classes/range.js');

/* ======== ======== ======== ======== */

module.exports = (wear) => {
    let ranges = {};

    ranges['Factory New'] = new Range(0.00, 0.07);
    ranges['Minimal Wear'] = new Range(0.07, 0.15);
    ranges['Field-Tested'] = new Range(0.15, 0.37);
    ranges['Well-Worn'] = new Range(0.37, 0.44);
    ranges['Battle-Scarred'] = new Range(0.44, 1.00);

    /* -------- -------- */

    for(const level in ranges) {
        if(ranges[level].inRange(wear)) {
            return Promise.resolve(level);
        }
    }

    return Promise.reject(); // Vanilla
}