const readLine = require("readline-sync");
const fs = require("fs");
/**
 * @class-Abstract class which has only the constructors.
 */
var Stock = function() {
  this.names = this.names;
  this.numbersOfStock = this.numbersOfStock;
  this.price = this.price;
  //check if we have abstract paramater in prototype
  if (Object.getPrototypeOf(this).hasOwnProperty("abstract")) {
    throw new Error("Can't instantiate abstract class!");
  }
};

Stock.prototype.abstract = true;
/**
 * @class-Which the read the json file and make it as an object
 */
var StockManager = function() {
  //Stock.call(this);//run constructor of animal
  this.stockData = { stock: [] };
  let JSONData = fs.readFileSync("stockData.json");
  let JSONstockData = JSON.parse(JSONData);
  if (Array.isArray(JSONstockData.stock)) {
    this.stockData.stock = JSONstockData.stock;
  }
};
/**
 * @module-The function of stockmanager class and inherits the abstract class
 */
StockManager.prototype.insertStock = function() {
  Stock.call(this);
  let name = readLine.question("Enter name of stock : ");
  let numberOfStock = readLine.questionInt("Enter number of stock : ");
  let price = readLine.questionInt("Enter the price : ");
  this.name = name;
  this.numberOfStock = numberOfStock;
  this.price = price;
  var myobj = JSON.parse(
    '{ "names":"' +
      this.name +
      '","numbersOfStock" :' +
      this.numberOfStock +
      ',"price" :' +
      this.price +
      "} "
  );
  //console.log(myobj.names + myobj.numbersOfStock + myobj.price);
  this.stockData.stock.push(JSON.parse(JSON.stringify(myobj)));
  fs.writeFileSync("stockData.json", JSON.stringify(this.stockData));
};
/**
 * @module-The function of stockmanager class and inherits the abstract class and print the total stock
 */
StockManager.prototype.stockReport = function() {
  for (let i = 0; i < this.stockData.stock.length; i++) {
    console.log(this.stockData.stock[i].names);
    const totalPrice =
      this.stockData.stock[i].price * this.stockData.stock[i].numbersOfStock;
    console.log(
      "Total Price of " + this.stockData.stock[i].names + " is : " + totalPrice
    );
  }
};
/**
 * @module-Created object for base class
 */
var StockManager = new StockManager();
StockManager.insertStock();
var report = StockManager.stockReport();
//var Stock = new Stock();
/**
 * @module-Stock Report is executed using Getter ans Setter
 */
let user = {
  get fullName1() {
    return this.insertst;
  },
  set fullName(value) {
    this.insertst = value;
  }
};
user.fullName = report;
user.fullName1;
