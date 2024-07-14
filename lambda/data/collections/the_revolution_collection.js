const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('MAG-7', 'Insomnia'), 
        new Skin('MP5-SD', 'Liquidation'), 
        new Skin('MP9', 'Featherweight'), 
        new Skin('P250', 'Re.built'), 
        new Skin('SCAR-20', 'Fragments'), 
        new Skin('SG 553', 'Cyberforce'), 
        new Skin('Tec-9', 'Rebel')
    ],
    'Restricted': [
        new Skin('Glock-18', 'Umbral Rabbit'), 
        new Skin('M4A1-S', 'Emphorosaur-S'), 
        new Skin('MAC-10', 'Sakkaku'), 
        new Skin('P90', 'Neoqueen'), 
        new Skin('R8 Revolver', 'Banana Cannon')
    ],
    'Classified': [
        new Skin('AWP', 'Duality'), 
        new Skin('P2000', 'Wicked Sick'), 
        new Skin('UMP-45', 'Wild Child')
    ],
    'Covert': [
        new Skin('AK-47', 'Head Shot'), 
        new Skin('M4A4', 'Temukau')
    ]
};