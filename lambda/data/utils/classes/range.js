module.exports = class {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    random() {
        return this.min + (Math.random() * (this.max - this.min));
    }
};