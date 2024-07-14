const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('AUG', 'Tom Cat'), 
        new Skin('AWP', 'Capillary'), 
        new Skin('CZ75-Auto', 'Distressed'), 
        new Skin('Desert Eagle', 'Blue Ply'), 
        new Skin('MP5-SD', 'Desert Strike'), 
        new Skin('Negev', 'Prototype'), 
        new Skin('R8 Revolver', 'Bone Forged')
    ],
    'Restricted': [
        new Skin('P2000', 'Acid Etched'), 
        new Skin('SCAR-20', 'Enforcer'), 
        new Skin('SG 553', 'Darkwing'), 
        new Skin('SSG 08', 'Fever Dream'), 
        new Skin('Sawed-Off', 'Apocalypto')
    ],
    'Classified': [
        new Skin('AK-47', 'Phantom Disruptor'), 
        new Skin('MAC-10', 'Disco Tech'), 
        new Skin('MAG-7', 'Justice')
    ],
    'Covert': [
        new Skin('Glock-18', 'Bullet Queen'), 
        new Skin('M4A1-S', 'Player Two')
    ]
};