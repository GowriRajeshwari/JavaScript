/******************************************************************************
 *  Execution       :   1. default node         cmd> node SumOf3.js
 *                      2. if nodemon installed cmd> nodemon SumOf3.js
 *
 *  Purpose         : Read in N integers and counts the numbero f triples that sum to exactly 0.
 * 
 *  @description    : A program with cubic running time. Read in N integers and counts the number
 *                    of triples that sum to exactly 0.
 *  @file           : SumOf3.js
 *  @overview       : Counts the number of triples that sum to exactly 0.
 *  @module         : 'readline -sync' 
 *  @author         : Gowri Rajeshwari K <gowrikanaga216@gmail.com
 *  @version        : 1.0
 *  @since          : 14-02-2020
 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./sumOf3Bl');

function read() {
    var num = readline.questionInt('Enter number of elements ')
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(readline.questionInt());
    }
    let triplet = callfunction.noOfTriplets(array); //calling noOfTriplets()
    console.log("Number of triplets: " + triplet);
}

read(); //calling read()