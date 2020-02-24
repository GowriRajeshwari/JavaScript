/**
 * @module QuadraticBl
 */
module.exports = {
    /**
    * @param {number} a - value of a
    * @param {number} b - value of b
    * @param {number} c - value of c
    * @return {number Array} root of the quadratic equation
    */
    getRoot: (a, b, c) => {
        var root1 = 0;
        var root2 = 0;
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            return;
        }
        else {
            root1 = (-b + Math.sqrt(delta)) / (2 * a);
            root2 = (-b - Math.sqrt(delta)) / (2 * a);
        }
        return [root1, root2];
    }

}