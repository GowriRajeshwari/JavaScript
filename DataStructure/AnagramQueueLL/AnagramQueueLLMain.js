/******************************************************************************
* Execution : 1. default node cmd> node AnagramQueueLLBL.js
* 2. if nodemon installed cmd> nodemon AnagramQueueLLBL.js
*
* Purpose :  Finding Prime Number 0-1000 and store only the numbers in that range that are Anagrams in queue.
*
* @description : Store the number which is both prime and Anagaram using queue....
*
* @file : AnagramQueueLLBL.js
* @overview : finding the Prime numbers that is anagram using queue.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./AnagramQueueLLBL');
try {
    var queue = new callfunction.Queue();
    queue.primeNo();
    // queue.printQueue();
}
catch (error) {
    console.log(error);
}