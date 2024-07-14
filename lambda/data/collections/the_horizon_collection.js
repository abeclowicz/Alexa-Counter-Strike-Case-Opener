const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('AUG', 'Amber Slipstream'), 
        new Skin('Dual Berettas', 'Shred'), 
        new Skin('Glock-18', 'Warhawk'), 
        new Skin('MP9', 'Capillary'), 
        new Skin('P90', 'Traction'), 
        new Skin('R8 Revolver', 'Survivalist'), 
        new Skin('Tec-9', 'Snek-9')
    ],
    'Restricted': [
        new Skin('AWP', 'PAW'), 
        new Skin('CZ75-Auto', 'Eco'), 
        new Skin('G3SG1', 'High Seas'), 
        new Skin('MP7', 'Powercore'), 
        new Skin('Nova', 'Toy Soldier')
    ],
    'Classified': [
        new Skin('FAMAS', 'Eye of Athena'), 
        new Skin('M4A1-S', 'Nightmare'), 
        new Skin('Sawed-Off', 'Devourer')
    ],
    'Covert': [
        new Skin('AK-47', 'Neon Rider'), 
        new Skin('Desert Eagle', 'Code Red')
    ]
};