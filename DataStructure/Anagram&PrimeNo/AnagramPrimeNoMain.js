/******************************************************************************
* Execution : 1. default node cmd> node Anagram&PrimeNoBL.js
* 2. if nodemon installed cmd> nodemon Anagram&PrimeNoBL.js
*
* Purpose :  Finding Prime Number 0-1000 and store only the numbers in that range that are Anagrams .
*
* @description : Store the number which is both prime and Anagaram....
*
* @file : Anagram&PrimeNoBL.js
* @overview : finding the Prime numbers that is anagram also.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./AnagramPrimeNoBL');
try {
    var ans = callfunction.primeNo();
}
catch (error) {
    console.log(error);
}