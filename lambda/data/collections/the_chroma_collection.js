const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports = {
    'Mil-Spec': [
        new Skin('Glock-18', 'Catacombs'), 
        new Skin('M249', 'System Lock'), 
        new Skin('MP9', 'Deadly Poison'), 
        new Skin('SCAR-20', 'Grotto'), 
        new Skin('XM1014', 'Quicksilver')
    ],
    'Restricted': [
        new Skin('Desert Eagle', 'Naga'), 
        new Skin('Dual Berettas', 'Urban Shock'), 
        new Skin('MAC-10', 'Malachite'), 
        new Skin('Sawed-Off', 'Serenity')
    ],
    'Classified': [
        new Skin('AK-47', 'Cartel'), 
        new Skin('M4A4', 'Dragon King'), 
        new Skin('P250', 'Muertos')
    ],
    'Covert': [
        new Skin('AWP', 'Man-o\'-war'), 
        new Skin('Galil AR', 'Chatterbox')
    ]
};