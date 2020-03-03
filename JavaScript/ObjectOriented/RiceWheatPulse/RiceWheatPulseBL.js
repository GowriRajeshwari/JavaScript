/**
 * @module-Stock Report is executed using Getter ans Setter
 */
class rice {
  constructor(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
  }
}
/**
 * @module-Stock Report is executed using Getter ans Setter
 */
class wheat {
  constructor(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
  }
}
/**
 * @module-Stock Report is executed using Getter ans Setter
 */
class pulse {
  constructor(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
  }
}
/**
 * @module-Stock Report is executed using Getter ans Setter
 */
const fs = require("fs");
const readline = require("readline-sync");
class inventoryManagement {
  constructor() {
    this.rice = [];
    this.wheat = [];
    this.pulse = [];
    let jsonread = fs.readFileSync("InventoryData.json");
    let jsondata = JSON.parse(jsonread);
    this.inventories = {};
    if (Array.isArray(jsondata.rice)) {
      this.inventories.rice = jsondata.rice;
    } else {
      this.inventories = ({ Rice: [] }, this.inventories);
    }
    if (Array.isArray(jsondata.wheat)) {
      this.inventories.wheat = jsondata.wheat;
    } else {
      this.inventories = ({ Wheat: [] }, this.inventories);
    }
    if (Array.isArray(jsondata.pulse)) {
      this.inventories.pulse = jsondata.pulse;
    } else {
      this.inventories = ({ Pulse: [] }, this.inventories);
    }
  }
  fillRice() {
    let name = readline.question("Enter the name of the rice : ");
    let price = readline.questionFloat(
      "Enter the price for the rice in per/Kg : "
    );
    let weight = readline.questionFloat("Enter the weight : ");
    let ricedetails = new rice(name, price, weight);
    this.inventories.rice.push(JSON.parse(JSON.stringify(ricedetails)));
    fs.writeFileSync("InventoryData.json", JSON.stringify(this.inventories));
  }
  fillWheat() {
    let name = readline.question("Enter the name of the Wheat : ");
    let price = readline.questionFloat(
      "Enter the price for the Wheat in per/Kg : "
    );
    let weight = readline.questionFloat("Enter the weight : ");
    let Wheatdetails = new wheat(name, price, weight);
    this.inventories.wheat.push(JSON.parse(JSON.stringify(Wheatdetails)));
    fs.writeFileSync("InventoryData.json", JSON.stringify(this.inventories));
  }
  fillPulse() {
    let name = readline.question("Enter the name of the Pulse : ");
    let price = readline.questionFloat(
      "Enter the price for the Pulse in per/Kg : "
    );
    let weight = readline.questionFloat("Enter the weight : ");
    let Pulsedetails = new pulse(name, price, weight);
    this.inventories.pulse.push(JSON.parse(JSON.stringify(Pulsedetails)));
    fs.writeFileSync("InventoryData.json", JSON.stringify(this.inventories));
  }
  calculateInventoryTotal() {
    let riceTotal = 0;
    let plusesTotal = 0;
    let wheatsTotal = 0;
    for (let i = 0; i < this.inventories.rice.length; i++) {
      riceTotal += this.inventories.rice[i].price;
    }
    for (let i = 0; i < this.inventories.pulse.length; i++) {
      plusesTotal += this.inventories.pulse[i].price;
    }
    for (let i = 0; i < this.inventories.wheat.length; i++) {
      wheatsTotal += this.inventories.wheat[i].price;
    }
    console.log(`Total price of Rice = ${riceTotal}`);
    console.log(`Total price of Pluses = ${plusesTotal}`);
    console.log(`Total price of Wheats = ${wheatsTotal}`);
  }
}
class inventoryManagementduplicate extends inventoryManagement {
  constructor() {
    super();
  }
  calculateInventoryTotal() {
    let riceTotal = 0;
    let plusesTotal = 0;
    let wheatsTotal = 0;
    for (let i = 0; i < this.inventories.rice.length; i++) {
      riceTotal += this.inventories.rice[i].price;
    }
    for (let i = 0; i < this.inventories.pulse.length; i++) {
      plusesTotal += this.inventories.pulse[i].price;
    }
    for (let i = 0; i < this.inventories.wheat.length; i++) {
      wheatsTotal += this.inventories.wheat[i].price;
    }
    console.log(`Total price of Rice = ${riceTotal}`);
    console.log(`Total price of Pluses = ${plusesTotal}`);
    console.log(`Total price of Wheats = ${wheatsTotal}`);
  }
}
module.exports = {
  inventoryManagement,
  rice,
  wheat,
  pulse,
  inventoryManagementduplicate
};
