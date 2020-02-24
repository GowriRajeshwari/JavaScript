/******************************************************************************
 *  Execution       :   1. default node         cmd> node QuadraticMain.js
 *                      2. if nodemon installed cmd> nodemon QuadraticMain.js
 *
 *  Purpose         : Compute the roots of the equation a*x*x + b*x + c.
 * 
 *  @description    : Take a, b and c as input values and Find the roots of the equation 
 *                    a*x*x + b*x + c.
 *  @file           : QuadraticMain.js
 *  @overview       : Find the roots of the equation a*x*x + b*x + c. 
 *  @module         : readline-sync
 *  @author         : Gowri Rajeshwari K <gowrikanaga216@gmail.com
 *  @version        : 1.0
 *  @since          : 14-02-2020
 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./quadraticBl');

function root() {
    var a = readline.questionInt('Enter value of a ');
    var b = readline.questionInt('Enter value of b ');
    var c = readline.questionInt('Enter value of c ');
    let rootVal;
    rootVal = callfunction.getRoot(a, b, c);
    if (rootVal.length > 0) {
        console.log("root of the quadratic equation is: " + rootVal[0] + " and " + rootVal[1]);
    }
    else
        console.log("Root not exist");
}

root();
