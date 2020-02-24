const readline = require('readline-sync');
/**
 * @module SumOf3Bl
 */
module.exports = {
    /**
    * @param {number Array} N - Contain integers value
    * @return {number} tripletsCount - Number of triplets whose sum is 0.
    */
    noOfTriplets: (array) => {
        tripletsCount = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                for (let k = j + 1; k < array.length; k++) {
                    if (array[i] + array[j] + array[k] == 0) {
                        tripletsCount++;
                    }
                }
            }
        }
        return tripletsCount;
    }

}