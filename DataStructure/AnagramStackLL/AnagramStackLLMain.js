/******************************************************************************
* Execution : 1. default node cmd> node AnagramStackBL.js
* 2. if nodemon installed cmd> nodemon AnagramStackBL.js
*
* Purpose :  Finding Prime Number 0-1000 and store only the numbers in that range that are Anagrams in stack.
*
* @description : Store the number which is both prime and Anagaram and reverse using stack....
*
* @file : AnagramStackBL.js
* @overview : finding the Prime numbers that is anagram also and reverse the anagram using stack.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./AnagramStackBL');
try {
    var stack = new callfunction.Stack();
    stack.primeNo();
    //stack.print();
   //  stack.push();
   //  stack.print();
    // stack.push(30);
     stack.pop();
    // stack.print();  
    // var ans = callfunction.primeNo();
}
catch (error) {
    console.log(error);
}