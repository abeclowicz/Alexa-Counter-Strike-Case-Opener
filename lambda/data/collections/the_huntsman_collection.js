const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports = {
    'Mil-Spec': [
        new Skin('CZ75-Auto', 'Twist'), 
        new Skin('Galil AR', 'Kami'), 
        new Skin('P2000', 'Pulse'), 
        new Skin('P90', 'Module'), 
        new Skin('SSG 08', 'Slashed'), 
        new Skin('Tec-9', 'Isaac')
    ],
    'Restricted': [
        new Skin('AUG', 'Torque'), 
        new Skin('MAC-10', 'Tatter'), 
        new Skin('PP-Bizon', 'Antique'), 
        new Skin('XM1014', 'Heaven Guard')
    ],
    'Classified': [
        new Skin('M4A1-S', 'Atomic Alloy'), 
        new Skin('SCAR-20', 'Cyrex'), 
        new Skin('USP-S', 'Caiman')
    ],
    'Covert': [
        new Skin('AK-47', 'Vulcan'), 
        new Skin('M4A4', 'Desert-Strike')
    ]
};