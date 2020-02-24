/******************************************************************************
 *  Execution       :   1. default node         cmd> node DistanceMain.js
 *                      2. if nodemon installed cmd> nodemon DistanceMain.js
 *
 *  Purpose         : Compute the distance of a point from origin.
 * 
 *  @description    : Takes two integer command-line arguments x and y and prints the Euclidean
 *                    distance from the point (x, y) to the origin (0, 0).
 *  @file           : DistanceMain.js
 *  @overview       : Compute the distance of a point from origin. 
 *  @author         : Gowri Rajeshwari K <gowrikanaga216@gmail.com
 *  @version        : 1.0
 *  @since          : 14-02-2020
 ******************************************************************************/

const callfunction = require('./distanceBl');


function distance() {
    var x = process.argv[2];
    var y = process.argv[3];
    
    let distanceVal = callfunction.getDistance(x,y);
    console.log("Distance of the point from origin is : " + distanceVal+" unit");
}
distance();