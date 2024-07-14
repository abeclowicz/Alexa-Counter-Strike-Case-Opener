const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('FAMAS', 'Meow 36'), 
        new Skin('Galil AR', 'Destroyer'), 
        new Skin('Glock-18', 'Winterized'), 
        new Skin('M4A4', 'Poly Mag'), 
        new Skin('MAC-10', 'Monkeyflage'), 
        new Skin('Negev', 'Drop Me'), 
        new Skin('UMP-45', 'Roadblock')
    ],
    'Restricted': [
        new Skin('Dual Berettas', 'Flora Carnivora'), 
        new Skin('M249', 'Downtown'), 
        new Skin('P90', 'Vent Rush'), 
        new Skin('R8 Revolver', 'Crazy 8'), 
        new Skin('SG 553', 'Dragon Tech')
    ],
    'Classified': [
        new Skin('AK-47', 'Ice Coaled'), 
        new Skin('P250', 'Visions'), 
        new Skin('Sawed-Off', 'Kiss Love')
    ],
    'Covert': [
        new Skin('AWP', 'Chromatic Aberration'), 
        new Skin('USP-S', 'Printstream')
    ]
};