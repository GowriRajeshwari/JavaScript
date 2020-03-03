const readline = require("readline-sync");
/**
 * @class-Bank Account Constructor
 */
let BankAccounts = function() {
  this.accountuser = [];
  this.bankAccountNo = [];
  this.accountNo = 1;
};
/**
 * @module-Functions for Bankaccounts
 */
BankAccounts.prototype = {
  add(bankAccountData) {
    // funtionality for adding a new bank account
    this.accountuser.push(bankAccountData);
    this.bankAccountNo.push(this.accountNo);
    console.log(
      "Successfully added the Account for " +
        bankAccountData +
        " with ID : " +
        this.accountNo
    );
    this.accountNo++;
  },
  find(bankAccount) {
    for (let i = 0; i < this.accountuser.length; i++) {
      if (this.bankAccountNo[i] == bankAccount) {
        console.log(this.accountuser[i]);
      }
    }
    // searching the list of bank accounts
  },
  getList() {
    for (let i = 0; i < this.accountuser.length; i++) {
      console.log(this.accountuser[i]);
    }
    // return a list of all the bank accounts
  }
};
/**
 * @class-Creating the proxy which has same intereface the Bankaccount class
 */
// creating the proxy
var BankAccountsProxy = function() {
  // getting a reference to the original object

  this.bankAccounts = new BankAccounts();
};
/**
 * @module-Proxy Methods
 */
BankAccountsProxy.prototype = {
  addBankAccount(bankAccountData) {
    // some funtionality before calling the add method on BankAccounts
    let name = readline.question("Enter the UserName : ");
    return this.bankAccounts.add(name);
  },
  findBankAccount(bankAccount) {
    // some funtionality before calling the find method on BankAccounts
    let ID = readline.questionInt("Enter the Id : ");
    return this.bankAccounts.find(ID);
  },
  getBankAccountsList() {
    // some funtionality before calling the getList method on BankAccounts
    return this.bankAccounts.getList();
  }
};

module.exports = {
  BankAccountsProxy,
  BankAccounts
};
