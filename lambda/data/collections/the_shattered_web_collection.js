const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('Dual Berettas', 'Balance'), 
        new Skin('G3SG1', 'Black Sand'), 
        new Skin('M249', 'Warbird'), 
        new Skin('MP5-SD', 'Acid Wash'), 
        new Skin('Nova', 'Plume'), 
        new Skin('R8 Revolver', 'Memento'), 
        new Skin('SCAR-20', 'Torn')
    ],
    'Restricted': [
        new Skin('AK-47', 'Rat Rod'), 
        new Skin('AUG', 'Arctic Wolf'), 
        new Skin('MP7', 'Neon Ply'), 
        new Skin('P2000', 'Obsidian'), 
        new Skin('PP-Bizon', 'Embargo')
    ],
    'Classified': [
        new Skin('SG 553', 'Colony IV'), 
        new Skin('SSG 08', 'Bloodshot'), 
        new Skin('Tec-9', 'Decimator')
    ],
    'Covert': [
        new Skin('AWP', 'Containment Breach'), 
        new Skin('MAC-10', 'Stalker')
    ]
};