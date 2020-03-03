/******************************************************************************
 * Execution : 1. default node cmd> node RiceWheatPulseMain.js
 * 2. if nodemon installed cmd> nodemon RiceWheatPulseMain.js
 *
 * Purpose : Inventory Management.
 *
 * @description : JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg....
 *
 * @file : RiceWheatPulseMain.js
 * @overview :  Inventory Management.
 * @module : module_name - This is optional if expeclictly its an npm or local package
 * @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
 * @version : v12.14.1
 * @since : 18-02-2020
 ******************************************************************************/
const readline = require("readline-sync");
const callfunction = require("./RiceWheatPulseBL");
try {
  let rwp = () => {
    let ricewheatpulse = new callfunction.inventoryManagementduplicate();
    let Inventorymanagement = new callfunction.inventoryManagement();
    while (true) {
      console.log("1 => To Add Rice");
      console.log("2 => To Add Wheat");
      console.log("3 => To Add Pulse");
      console.log("4 => Get Total for Rice,Pulse,Wheat ");
      console.log("5 => Get Total for Rice,Pulse,Wheat from Base Class");
      console.log("6 => To Exit");
      let choice = readline.questionInt("Enter your choice : ");
      switch (choice) {
        case 1:
          ricewheatpulse.fillRice();
          break;
        case 2:
          ricewheatpulse.fillWheat();
          break;
        case 3:
          ricewheatpulse.fillPulse();
          break;
        case 4:
          ricewheatpulse.calculateInventoryTotal();
          break;
        case 5:
          Inventorymanagement.calculateInventoryTotal();
          break;
        case 6:
          process.exit(0);
      }
    }
  };
  rwp();
} catch (error) {
  console.log(error);
}
