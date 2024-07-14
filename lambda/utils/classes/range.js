module.exports = class {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    inRange(x) {
        return this.min <= x && x < this.max;
    }
};