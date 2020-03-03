/******************************************************************************
 *  Execution       :   1. default node         cmd> node stockAccManagementMain.js 
                      
 * @description     :  Write a program to read in Stock Names, Number of Share, Share Price.
                       Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @file           :  stockAccManagementMain.js
 *  @overview       :  Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Gowri Rajeshwari K<gowrikanaga216@gmail.com>
 *  @version        : v12.14.1
 *  @since          : 05-02-2020
 ******************************************************************************/
const stockLib = require("./stockManagementBL");
try {
  let main = () => {
    //   let ST = new stockLib.StockManager();
    //ST.stockReport();
    stockLib;
  };
  main();
} catch (err) {
  throw err;
}
