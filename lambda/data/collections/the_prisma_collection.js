const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('AK-47', 'Uncharted'), 
        new Skin('FAMAS', 'Crypsis'), 
        new Skin('Galil AR', 'Akoben'), 
        new Skin('MAC-10', 'Whitefish'), 
        new Skin('MP7', 'Mischief'), 
        new Skin('P250', 'Verdigris'), 
        new Skin('P90', 'Off World')
    ],
    'Restricted': [
        new Skin('AWP', 'Atheris'), 
        new Skin('Desert Eagle', 'Light Rail'), 
        new Skin('MP5-SD', 'Gauss'), 
        new Skin('Tec-9', 'Bamboozle'), 
        new Skin('UMP-45', 'Moonrise')
    ],
    'Classified': [
        new Skin('AUG', 'Momentum'), 
        new Skin('R8 Revolver', 'Skull Crusher'), 
        new Skin('XM1014', 'Incinegator')
    ],
    'Covert': [
        new Skin('Five-SeveN', 'Angry Mob'), 
        new Skin('M4A4', 'The Emperor')
    ]
};