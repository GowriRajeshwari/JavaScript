/******************************************************************************
* Execution : 1. default node cmd> node BankingcounterBL.js
* 2. if nodemon installed cmd> nodemon BankingcounterBL.js
*
* Purpose : Banking cash counter  .
*
* @description : One string is an anagram of another if the second is simply a rearrangement 
*   of the which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
*   Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people.
* Maintain the Cash Balance.....
*
* @file : BankingcounterBL.js
* @overview : Banking Cash Counter.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./BankingcounterBL');
try {
   // let no = readline.question("Enter how many person are in encounter : ");
    var queue = new callfunction.Queue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();
}
catch (error) {
    console.log(error);
}