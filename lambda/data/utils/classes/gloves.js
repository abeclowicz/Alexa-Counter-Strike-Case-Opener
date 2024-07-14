const Range = require('./range.js');

/* ======== ======== ======== ======== */

module.exports = class {
    constructor(weapon, family) {
        this.name = weapon + ' ' + family;
        this.wear_limits = new Range(0.06, 0.80);
    }
};