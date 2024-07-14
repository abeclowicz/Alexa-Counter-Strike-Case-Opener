const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('AUG', 'Triqua'), 
        new Skin('G3SG1', 'Hunter'), 
        new Skin('Glock-18', 'Off World'), 
        new Skin('MAC-10', 'Oceanic'), 
        new Skin('SCAR-20', 'Jungle Slipstream'), 
        new Skin('Sawed-Off', 'Morris'), 
        new Skin('Tec-9', 'Cracked Opal')
    ],
    'Restricted': [
        new Skin('CZ75-Auto', 'Tacticat'), 
        new Skin('MP9', 'Goo'), 
        new Skin('SG 553', 'Phantom'), 
        new Skin('UMP-45', 'Exposure'), 
        new Skin('XM1014', 'Ziggy')
    ],
    'Classified': [
        new Skin('M4A1-S', 'Leaded Glass'), 
        new Skin('PP-Bizon', 'High Roller'), 
        new Skin('R8 Revolver', 'Llama Cannon')
    ],
    'Covert': [
        new Skin('AK-47', 'The Empress'), 
        new Skin('P250', 'See Ya Later')
    ]
};