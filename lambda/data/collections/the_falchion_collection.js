const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports = {
    'Mil-Spec': [
        new Skin('Galil AR', 'Rocket Pop'), 
        new Skin('Glock-18', 'Bunsen Burner'), 
        new Skin('Nova', 'Ranger'), 
        new Skin('P90', 'Elite Build'), 
        new Skin('UMP-45', 'Riot'), 
        new Skin('USP-S', 'Torque')
    ],
    'Restricted': [
        new Skin('FAMAS', 'Neural Net'), 
        new Skin('M4A4', 'Evil Daimyo'), 
        new Skin('MP9', 'Ruby Poison Dart'), 
        new Skin('Negev', 'Loudmouth'), 
        new Skin('P2000', 'Handgun')
    ],
    'Classified': [
        new Skin('CZ75-Auto', 'Yellow Jacket'), 
        new Skin('MP7', 'Nemesis'), 
        new Skin('SG 553', 'Cyrex')
    ],
    'Covert': [
        new Skin('AK-47', 'Aquamarine Revenge'), 
        new Skin('AWP', 'Hyper Beast')
    ]
};