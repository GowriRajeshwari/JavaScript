/******************************************************************************
* Execution : 1. default node cmd> node BalancedParenthesesBL.js
* 2. if nodemon installed cmd> nodemon BalancedParenthesesBL.js
*
* Purpose : Balanced Parenthesis.
*
* @description : Ensure parentheses must appear in a balanced fashion....
*
* @file : BalancedParenthesesBL.js
* @overview : Checking the parentheses are balanced.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./BalancedParenthesesBL');
try {
    let string = readline.question("Enter the arithmetic experssion to check : ");
   let ans = callfunction.balancedparentheses(string);
   if(ans == true)
   console.log("Parentheses Balanced");
   else
   console.log("Parentheses Not Balanced")
}
catch (error) {
    console.log(error);
}