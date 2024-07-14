const Skin = require('../utils/classes/skin.js');

/* ======== ======== ======== ======== */

module.exports =  {
    'Mil-Spec': [
        new Skin('Five-SeveN', 'Kami'), 
        new Skin('Galil AR', 'Sandstorm'), 
        new Skin('M249', 'Magma'), 
        new Skin('PP-Bizon', 'Cobalt Halftone')
    ],
    'Restricted': [
        new Skin('Dual Berettas', 'Marina'), 
        new Skin('FAMAS', 'Pulse'), 
        new Skin('MP9', 'Rose Iron'), 
        new Skin('Nova', 'Rising Skull')
    ],
    'Classified': [
        new Skin('AWP', 'Redline'), 
        new Skin('M4A1-S', 'Guardian'), 
        new Skin('P250', 'Mehndi')
    ],
    'Covert': [
        new Skin('M4A4', 'Asiimov'), 
        new Skin('Sawed-off', 'The Kraken')
    ]
};