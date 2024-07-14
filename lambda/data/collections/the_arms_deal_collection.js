const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('AUG', 'Wings'), 
        new Skin('MP7', 'Skulls'), 
        new Skin('SG 553', 'Ultraviolet')
    ],
    'Restricted': [
        new Skin('Glock-18', 'Dragon Tattoo'), 
        new Skin('M4A1-S', 'Dark Water'), 
        new Skin('USP-S', 'Dark Water')
    ],
    'Classified': [
        new Skin('AK-47', 'Case Hardened'), 
        new Skin('Desert Eagle', 'Hypnotic')
    ],
    'Covert': [
        new Skin('AWP', 'Lightning Strike')
    ]
};