const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('CZ75-Auto', 'Vendetta'), 
        new Skin('G3SG1', 'Digital Mesh'), 
        new Skin('Galil AR', 'Vandal'), 
        new Skin('M249', 'Deep Relief'), 
        new Skin('MP5-SD', 'Condition Zero'), 
        new Skin('P250', 'Contaminant'), 
        new Skin('P90', 'Cocoa Rampage')
    ],
    'Restricted': [
        new Skin('AWP', 'Exoskeleton'), 
        new Skin('Dual Berettas', 'Dezastre'), 
        new Skin('Nova', 'Clear Polymer'), 
        new Skin('SSG 08', 'Parallax'), 
        new Skin('UMP-45', 'Gold Bismuth')
    ],
    'Classified': [
        new Skin('Five-SeveN', 'Fairy Tale'), 
        new Skin('M4A4', 'Cyber Security'), 
        new Skin('USP-S', 'Monster Mashup')
    ],
    'Covert': [
        new Skin('Glock-18', 'Neo-Noir'), 
        new Skin('M4A1-S', 'Printstream')
    ]
};