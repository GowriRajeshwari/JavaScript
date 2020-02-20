/******************************************************************************
* Execution : 1. default node cmd> node PalindromeBL.js
* 2. if nodemon installed cmd> nodemon PalindromeBL.js
*
* Purpose : Chcking whether string is palindrome or not.
*
* @description : A palindrome is a string that reads the same forward and backward, 
*   for example, radar, toot, and madam.
*   We would like to construct an algorithm to input a string of characters and check whether it is a palindrome....
*
* @file : PalindromeBL.js
* @overview : checking String is Palindrome or not.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./PalindromeBL');
try {
    let string = readline.question("Enter the string : ");
    var dequeue = new callfunction.dequeue();
    var sort = callfunction.sort(string);
    for (let i = 0; i < sort.length; i++) {
        dequeue.addRear(sort[i]);
    }
    let stilltrue = true;
    while(dequeue.size() > 1 && stilltrue){
        let first = dequeue.removeRear();
        let last = dequeue.removeFront();
        if(first != last){
            stilltrue = false;
        }
    }
    if(stilltrue == true){
        console.log("String is Palindrome");
    }
    else{
        console.log("String is Not Palindrome");
    }
}
catch (error) {
    console.log(error);
}