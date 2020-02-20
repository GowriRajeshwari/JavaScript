/******************************************************************************
* Execution : 1. default node cmd> node PrimeNoBL.js
* 2. if nodemon installed cmd> nodemon PrimeNoBL.js
*
* Purpose : Range of 0 - 1000 Numbers and find the Prime numbers in that range.
*
* @description : Store the prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200,
* and so on. While the second dimension represents the prime numbers in that range....
*
* @file : PrimeNoBL.js
* @overview : finding the Prime numbers.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./PrimeNoBL');
try {
    var ans = callfunction.primeNo();
}
catch (error) {
    console.log(error);
}