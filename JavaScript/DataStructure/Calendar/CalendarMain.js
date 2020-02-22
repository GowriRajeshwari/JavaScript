/******************************************************************************
* Execution : 1. default node cmd> node CalendarBL.js
* 2. if nodemon installed cmd> nodemon CalendarBL.js
*
* Purpose : Calendar in an 2D Array.
*
* @description :  Store the Calendar in an 2D Array,
*    the first dimension the week of the month and the second dimension stores the day of the week.....
*
* @file : CalendarBL.js
* @overview : Calendar in an 2D Array .
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./CalendarBL');
try {

   // let month = readline.questionInt("enter the month : ");
    //let year = readline.questionInt("enter the year : ");
    var ans = callfunction.calendar(process.argv[2],process.argv[3]);
}
catch (error) {
    console.log(error);
}