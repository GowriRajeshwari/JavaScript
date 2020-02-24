/**
 * @module SumOf3Bl
 */
module.exports = {
    /**
    * @param {number} x - x axis value 
    * @param {number} y - y axis value
    * @return {number} distance - distance of the point from origin
    */
    getDistance: (x, y) => {
        let distance = Math.sqrt((x * x) + (y * y));
        return distance;
    }

}