const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('CZ75-Auto', 'Circaetus'), 
        new Skin('Glock-18', 'Clear Polymer'), 
        new Skin('M249', 'O.S.I.P.R.'), 
        new Skin('Nova', 'Windblown'), 
        new Skin('R8 Revolver', 'Junk Yard'), 
        new Skin('SG 553', 'Heavy Metal'), 
        new Skin('UMP-45', 'Oscillator')
    ],
    'Restricted': [
        new Skin('AK-47', 'Slate'), 
        new Skin('Desert Eagle', 'Trigger Discipline'), 
        new Skin('MAC-10', 'Button Masher'), 
        new Skin('Negev', 'dev_texture'), 
        new Skin('P250', 'Cyber Shell')
    ],
    'Classified': [
        new Skin('Galil AR', 'Chromatic Aberration'), 
        new Skin('MP9', 'Food Chain'), 
        new Skin('XM1014', 'XOXO')
    ],
    'Covert': [
        new Skin('M4A4', 'In Living Color'), 
        new Skin('USP-S', 'The Traitor')
    ]
};