const readLine = require('readline-sync');
const fs=require('fs');

class Customer{
    constructor(name,password,stock){
        this.name = name;
        this.password = password;
        this.stock = [stock];
    }
}

class Stock{
    constructor(name,number,price){
        this.name = name;
        this.number = number;
        this.price = price;
    }
}

class CommercialData{
    constructor(){
        let JSONData = JSON.parse(fs.readFileSync('commmericalData.json'));
        this.commercialData = {};
        if(!Array.isArray(JSONData.customer)){
            this.commercialData = Object.assign({customer:[{stock:[]}]},this.commercialData);
        }else {
            this.commercialData = JSONData;
        }
    }
 
    createAccount(){
        let custName = readLine.question('Enter Account Holder Name : ');
        let password = readLine.question('Enter The password : ');
        let stockName = readLine.question('Enter Stock Name : ');
        let number = readLine.questionInt('Enter Numbers Of Stock : ');
        let price = readLine.questionInt('Enter price of stock : ');
        let stockObj = new Stock(stockName,number,price);
        let customerObj = new Customer(custName,password,stockObj);
        this.commercialData.customer.push(JSON.parse(JSON.stringify(customerObj)));
        fs.writeFileSync('commercialData.json',JSON.stringify(this.commercialData));
    }

    checkAccount(name,password){
        let isAvailable = false;
        let indexPosition = null;
        for(let i=0;i<this.commercialData.customer.length;i++){
            if(this.commercialData.customer[i].name  == name && this.commercialData.customer[i].password  == password){
                isAvailable = true;
                indexPosition = i;
            }
        }
        let result = {status:isAvailable,position:indexPosition}
        return JSON.stringify(result);
    }

    buyStock(indexOfCust){
        console.log(`-------** Welcom ${this.commercialData.customer[indexOfCust].name}..`);
        let name = readLine.question('Enter the name of Stock : '); 
        let number = readLine.questionInt('Enter Number of stock : ');
        let price = readLine.questionInt('Enter the price of Stock : ');
        let buyStock = new Stock(name,number,price);
        this.commercialData.customer[indexOfCust].stock.push(JSON.parse(JSON.stringify(buyStock)));
        fs.writeFileSync('commercialData.json',JSON.stringify(this.commercialData));
    }

    sellStock(indexOfCust){
        console.log('----Available Stocks-----');
        for(let n in this.commercialData.customer[indexOfCust].stock){
            console.log(`${n} => ${this.commercialData.customer[indexOfCust].stock[n].name}`);
        }
        let nameStock = readLine.question('Enter name of the Stock for sell : ');
        for(let n in this.commercialData.customer[indexOfCust].stock){
            if(this.commercialData.customer[indexOfCust].stock[n].name == nameStock){
                this.commercialData.customer[indexOfCust].stock.splice(n,1);
            }
        }
        // this.commercialData.customer[indexOfCust].stock.push(JSON.parse(JSON.stringify(buyStock)));
        fs.writeFileSync('commercialData.json',JSON.stringify(this.commercialData));
    }

    printReport(indexOfCust){
        console.log(`** Report stock of ${this.commercialData.customer[indexOfCust].name}`);
        for(let n in this.commercialData.customer[indexOfCust].stock){
            console.log(this.commercialData.customer[indexOfCust].stock[n]);
        }
    }
}
module.exports = {
    Customer,Stock,CommercialData
}