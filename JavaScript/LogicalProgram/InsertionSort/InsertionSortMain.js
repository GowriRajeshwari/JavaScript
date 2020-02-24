/******************************************************************************
* Execution : 1. default node cmd> node InsertionSortMain.js
* 2. if nodemon installed cmd> nodemon InsertionSortMain.js
*
* Purpose : sorting .
*
* @description : Sorting the array using insertion sort logic...
*
* @file : InsertionSortMain.js
* @overview : Getting the sorted array.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./InsertionSortBL');
try{
    let str=readline.question("Enter the string to sort : ");
    let ans=callfunction.insertionsort(str);
    console.log(ans);
}
catch(error){
    console.log(error);
}
