const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports = {
    'Mil-Spec': [
        new Skin('FAMAS', 'Hexane'), 
        new Skin('M4A1-S', 'Blood Tiger'), 
        new Skin('P250', 'Hive'), 
        new Skin('SCAR-20', 'Crimson Web'), 
        new Skin('Tec-9', 'Blue Titanium')
    ],
    'Restricted': [
        new Skin('Dual Berettas', 'Hemoglobin'), 
        new Skin('Five-SeveN', 'Case Hardened'), 
        new Skin('MP9', 'Hypnotic'), 
        new Skin('Nova', 'Graphite')
    ],
    'Classified': [
        new Skin('P90', 'Cold Blooded'), 
        new Skin('USP-S', 'Serum')
    ],
    'Covert': [
        new Skin('SSG 08', 'Blood in the Water')
    ]
};