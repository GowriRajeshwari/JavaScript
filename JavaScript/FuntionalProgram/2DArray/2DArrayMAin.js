/******************************************************************************
 *  Execution       :   1. default node         cmd> node TwoDArrayMain.js
 *                      2. if nodemon installed cmd> nodemon TwoDArrayMain.js
 *
 *  Purpose         : Read elements from user and store it in 2D arrays. 
 * 
 *  @description    : Read elements from user and store it in 2D arrays and printing them out.
 *  @file           : TwoDArrayMain.js
 *  @overview       : Read elements from user and store it in 2D arrays.
 *  @module         : 'readline -sync' 
 *  @author         : Gowri Rajeshwari K <gowrikannan216@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-02-2020
 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./TwoDArrayBl');
let array=[];
var row = readline.questionInt('Enter number of rows ');
var column = readline.questionInt('Enter number of column ');
array=callfunction.readArray(row,column); //calling replace()
//printArray(array);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}