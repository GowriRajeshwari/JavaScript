/******************************************************************************
* Execution : 1. default node cmd> node AnagramMain.js
* 2. if nodemon installed cmd> nodemon AnagramMain.js
*
* Purpose : checking for anagram .
*
* @description : One string is an anagram of another if the second is simply a rearrangement of the first....
*
* @file : AnagramMain.js
* @overview : Getting the sorted array.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline=require('readline-sync');
const callfunction=require('./AnagramBL');
try{
    let string1 = readline.question("Enter the first string : ");
    let string2 = readline.question("Enter the second string : ");
    let anagram = callfunction.Anagram(string1,string2);
    console.log(anagram);
}
catch(error){
    console.log(error);
}