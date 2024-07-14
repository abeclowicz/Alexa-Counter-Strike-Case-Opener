const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('Glock-18', 'Oxide Blaze'), 
        new Skin('M4A4', 'Magnesium'), 
        new Skin('MP9', 'Modest Threat'), 
        new Skin('Nova', 'Wood Fired'), 
        new Skin('SG 553', 'Danger Close'), 
        new Skin('Sawed-Off', 'Black Sand'), 
        new Skin('Tec-9', 'Fubar')
    ],
    'Restricted': [
        new Skin('G3SG1', 'Scavenger'), 
        new Skin('Galil AR', 'Signal'), 
        new Skin('MAC-10', 'Pipe Down'), 
        new Skin('P250', 'Nevermore'), 
        new Skin('USP-S', 'Flashback')
    ],
    'Classified': [
        new Skin('Desert Eagle', 'Mecha Industries'), 
        new Skin('MP5-SD', 'Phosphor'), 
        new Skin('UMP-45', 'Momentum')
    ],
    'Covert': [
        new Skin('AK-47', 'Asiimov'), 
        new Skin('AWP', 'Neo-Noir')
    ]
};