const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports = {
    'Mil-Spec': [
        new Skin('CZ75-Auto', 'Imprint'), 
        new Skin('Five-SeveN', 'Scumbria'), 
        new Skin('G3SG1', 'Ventilator'), 
        new Skin('Negev', 'Dazzle'), 
        new Skin('P90', 'Grim'), 
        new Skin('UMP-45', 'Briefing'), 
        new Skin('XM1014', 'Slipstream')
    ],
    'Restricted': [
        new Skin('Desert Eagle', 'Directive'), 
        new Skin('Glock-18', 'Weasel'), 
        new Skin('MAG-7', 'Petroglyph'), 
        new Skin('SCAR-20', 'Powercore'), 
        new Skin('SG 553', 'Triarch')
    ],
    'Classified': [
        new Skin('AUG', 'Syd Mead'), 
        new Skin('MP9', 'Airlock'), 
        new Skin('Tec-9', 'Fuel Injector')
    ],
    'Covert': [
        new Skin('AK-47', 'Neon Revolution'), 
        new Skin('FAMAS', 'Roll Cage')
    ]
};