/******************************************************************************
 *  Execution       :   1. default node         cmd> node ProxyMain.js
 *                      2. if nodemon installed cmd> nodemon ProxyMain.js
 *
 *  Purpose         : example of Proxy design pattern
 *
 *  @description    : Proxy Design Pattern
 *
 *  @file           : ProxyMain.js
 *  @overview       : Proxy design pattern
 *  @module         : module_name This is optional if expeclictly its an npm or local package
 *  @author         : Gowri Rajeshwari<gowrikanaga216@@gmail.com>
 *  @version        : v12.14.1
 *  @since          : 07-02-2020
 ******************************************************************************/
const readline = require("readline-sync");
const callfunction = require("./ProxyBL");
try {
  let proxy = () => {
    var BankAccountsProxy = new callfunction.BankAccountsProxy();
    while (true) {
      console.log("1 => Add Account ");
      console.log("2 => Search Account");
      console.log("3 => List Account");
      console.log("4 => To Exit");
      let choice = readline.questionInt("Enter your choice : ");
      switch (choice) {
        case 1:
          BankAccountsProxy.addBankAccount();
          break;
        case 2:
          BankAccountsProxy.findBankAccount();
          break;
        case 3:
          BankAccountsProxy.getBankAccountsList();
          break;
        case 4:
          process.exit(0);
      }
    }
  };
  proxy();
} catch (error) {
  console.log(error);
}
