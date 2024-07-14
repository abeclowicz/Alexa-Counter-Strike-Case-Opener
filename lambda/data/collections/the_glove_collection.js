const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports = {
    'Mil-Spec': [
        new Skin('CZ75-Auto', 'Polymer'), 
        new Skin('Galil AR', 'Black Sand'), 
        new Skin('Glock-18', 'Ironwork'), 
        new Skin('MAG-7', 'Sonar'), 
        new Skin('MP7', 'Cirrus'), 
        new Skin('MP9', 'Sand Scale'), 
        new Skin('P2000', 'Turf')
    ],
    'Restricted': [
        new Skin('Dual Berettas', 'Royal Consorts'), 
        new Skin('G3SG1', 'Stinger'), 
        new Skin('M4A1-S', 'Flashback'), 
        new Skin('Nova', 'Gila'), 
        new Skin('USP-S', 'Cyrex')
    ],
    'Classified': [
        new Skin('FAMAS', 'Mecha Industries'), 
        new Skin('P90', 'Shallow Grave'), 
        new Skin('Sawed-Off', 'Wasteland Princess')
    ],
    'Covert': [
        new Skin('M4A4', 'Buzz Kill'), 
        new Skin('SSG 08', 'Dragonfire')
    ]
};