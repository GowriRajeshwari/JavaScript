/******************************************************************************
 *  Execution       :   1. default node         cmd> node ObserverPatternMain.js
 *                      2. if nodemon installed cmd> nodemon ObserverPatternMain.js
 *
 *  Purpose         : example of Observer design pattern
 *
 *  @description    : Observer Design Pattern
 *
 *  @file           : ObserverPatternMain.js
 *  @overview       : Observer design pattern
 *  @module         : module_name This is optional if expeclictly its an npm or local package
 *  @author         : Gowri Rajeshwari<gowrikanaga216@@gmail.com>
 *  @version        : v12.14.1
 *  @since          : 07-02-2020
 ******************************************************************************/
const callfunction = require("./ObserverPatternBL");
try {
  let main = () => {
    let observer = new callfunction.subject();
    observer.subscribe("observer 1");
    observer.subscribe("observer 2");
    observer.notifyAll("observer 2");
    //console.log(notifyall);
  };
  main();
} catch (err) {
  throw err;
}
