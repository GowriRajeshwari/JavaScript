/******************************************************************************
* Execution : 1. default node cmd> node AddressBookMain.js
* 2. if nodemon installed cmd> nodemon AddressBookMain.js
*
* Purpose : checking for anagram .
*
* @description : To make address book using oops concept and stores and retrieve 
*   the data from json file. ....
*
* @file : AddressBookMain.js
* @overview : Implementation of address book program.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./AddressBookBL');
try {
    let ab = () => {
        let addBook = new callfunction.AddressBook();
        while (true) {
            console.log("1 => To Add Entry");
            console.log("2 => To Delete Entry");
            console.log("3 => To Edit Entry");
            console.log("4 => To Print Entries");
            console.log("5 => To Sort by Name");
            console.log("6 => To Sort by Zip");
            console.log("7 => To Exit");
            let choice = readline.questionInt("Enter your choice : ");
            switch (choice) {
                case 1:
                    addBook.addEntry();
                    break;
                case 2:
                    addBook.deleteEntry();
                    break;
                case 3:
                    addBook.editEntry();
                    break;
                case 4:
                    addBook.printBookData();
                    break;
                case 5:
                    addBook.sortByName();
                    break;
                case 6:
                    addBook.sortByZip();
                    break;
                case 7:
                process.exit(0);

            }
        }
    }
    ab();
}
catch (error) {
    console.log(error);
}