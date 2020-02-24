/******************************************************************************
* Execution : 1. default node cmd> node WindChillBL.js
* 2. if nodemon installed cmd> nodemon WindChillBL.js
*
* Purpose : to find the temperature .
*
* @description : to find the windchill temperature and windchill speed using command line argument...
*
* @file : WindChillBL.js
* @overview : Windchill temperature and speed.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./WindChillBL');
try{
    console.log("Temperature : " +process.argv[2]);
    console.log("Speed : "+process.argv[3]);
    let ans = callfunction.windchill(process.argv[2],process.argv[3]);
    console.log("WindChill = " + ans);
}
catch(error){
    console.log(error);
}