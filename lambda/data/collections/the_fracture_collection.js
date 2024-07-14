const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('Negev', 'Ultralight'), 
        new Skin('P2000', 'Gnarled'), 
        new Skin('P250', 'Cassette'), 
        new Skin('P90', 'Freight'), 
        new Skin('PP-Bizon', 'Runic'), 
        new Skin('SG 553', 'Ol\' Rusty'), 
        new Skin('SSG 08', 'Mainframe 001')
    ],
    'Restricted': [
        new Skin('Galil AR', 'Connexion'), 
        new Skin('MAC-10', 'Allure'), 
        new Skin('MAG-7', 'Monster Call'), 
        new Skin('MP5-SD', 'Kitbash'), 
        new Skin('Tec-9', 'Brother')
    ],
    'Classified': [
        new Skin('Glock-18', 'Vogue'), 
        new Skin('M4A4', 'Tooth Fairy'), 
        new Skin('XM1014', 'Entombed')
    ],
    'Covert': [
        new Skin('AK-47', 'Legion of Anubis'), 
        new Skin('Desert Eagle', 'Printstream')
    ]
};