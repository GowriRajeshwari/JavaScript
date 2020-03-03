/******************************************************************************
 *  Execution       :   1. default node         cmd> node AdapterMain.js
 *                      2. if nodemon installed cmd> nodemon AdapterMain.js
 *
 *  Purpose         : example of Adapter design pattern
 *
 *  @description    : Adapter Design Pattern
 *
 *  @file           : AdapterMain.js
 *  @overview       : Adapter design pattern
 *  @module         : module_name This is optional if expeclictly its an npm or local package
 *  @author         : Gowri Rajeshwari<gowrikanaga216@@gmail.com>
 *  @version        : v12.14.1
 *  @since          : 07-02-2020
 ******************************************************************************/
const readline = require("readline-sync");
const callfunction = require("./AdapterBL");
try {
  //Calling the function of Adapter Desgin Pattern
  callfunction;
} catch (error) {
  console.log(error);
}
