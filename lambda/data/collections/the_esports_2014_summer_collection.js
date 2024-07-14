const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports = {
    'Mil-Spec': [
        new Skin('CZ75-Auto', 'Hexane'), 
        new Skin('MAC-10', 'Ultraviolet'), 
        new Skin('Negev', 'Bratatat'), 
        new Skin('SSG 08', 'Dark Water'), 
        new Skin('USP-S', 'Blood Tiger'), 
        new Skin('XM1014', 'Red Python')
    ],
    'Restricted': [
        new Skin('Desert Eagle', 'Crimson Web'), 
        new Skin('Glock-18', 'Steel Disruption'), 
        new Skin('MP7', 'Ocean Foam'), 
        new Skin('P90', 'Virus'), 
        new Skin('PP-Bizon', 'Blue Streak')
    ],
    'Classified': [
        new Skin('AUG', 'Bengal Tiger'), 
        new Skin('AWP', 'Corticera'), 
        new Skin('Nova', 'Bloomstick'), 
        new Skin('P2000', 'Corticera')
    ],
    'Covert': [
        new Skin('AK-47', 'Jaguar'), 
        new Skin('M4A4', 'Bullet Rain')
    ]
};