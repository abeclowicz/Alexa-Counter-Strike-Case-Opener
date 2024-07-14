const families = require('../families.js');
const Range = require('./range.js');

/* ======== ======== ======== ======== */

module.exports = class {
    constructor(weapon, family) {
        this.name = weapon + ' ' + family;

        /* -------- -------- */

        if(family in families === false) {
            console.log(`Error: cannot find family '${family}' for '${weapon}', using 'Vanilla' instead`);

            this.wear_limits = new Range(-1.00, -1.00); // Vanilla
            return;
        }

        const weapon_obj_key = weapon.replace(/[ -]/g, '_');

        if(weapon_obj_key in families[family].exceptions === true) {
            this.wear_limits = families[family].exceptions[weapon_obj_key];
            return;
        }

        this.wear_limits = families[family].default;
    }
};