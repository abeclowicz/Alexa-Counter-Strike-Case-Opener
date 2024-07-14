const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('FAMAS', 'Macabre'), 
        new Skin('M4A1-S', 'Briefing'), 
        new Skin('MAC-10', 'Aloha'), 
        new Skin('MAG-7', 'Hard Water'), 
        new Skin('Tec-9', 'Cut Out'), 
        new Skin('UMP-45', 'Metal Flowers'), 
        new Skin('USP-S', 'Blueprint')
    ],
    'Restricted': [
        new Skin('AK-47', 'Orbit Mk01'), 
        new Skin('P2000', 'Woodsman'), 
        new Skin('P250', 'Red Rock'), 
        new Skin('P90', 'Death Grip'), 
        new Skin('SSG 08', 'Death\'s Head')
    ],
    'Classified': [
        new Skin('Dual Berettas', 'Cobra Strike'), 
        new Skin('Galil AR', 'Sugar Rush'), 
        new Skin('M4A4', 'Hellfire')
    ],
    'Covert': [
        new Skin('AWP', 'Oni Taiji'), 
        new Skin('Five-SeveN', 'Hyper Beast')
    ]
};