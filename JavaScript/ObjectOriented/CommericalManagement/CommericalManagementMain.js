/******************************************************************************
 *  Execution       :   1. default node         cmd> node commercialDataProcessingMain.js 
                      
 * @description     :   StockAccount.java implements a data type that might be used by a financial institution 
                        to keep track of customer information. The StockAccount class implements following methods
 *  @file           :  commercialDataProcessingMain.js
 *  @overview       :  Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Gowri Rajeshwari k<gowrikanaga216.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-02-2020
 ******************************************************************************/
const commLib = require('./CommericalManagementBL');
const readLine = require('readline-sync');
try{
    let main = () => {
        let CMD = new commLib.CommercialData();
        console.log('      Hello WELCOME');
        let userName = readLine.question('    Enter Username = ');
        let password = readLine.question('    Enter the Password = ');
        jsonResult = CMD.checkAccount(userName,password);
        let responce = JSON.parse(jsonResult);
        if(responce.status){
            console.log('Successfully Logged.');
            
            CMD.printReport(responce.position);
            let choice = 0;
            do{
                console.log('1 => for Buy Stock.');
                console.log('2 => for Sell Stock.');
                console.log('3 => for Print Stock.');
                console.log('4 => LOGOUT');
                choice = readLine.questionInt('Enter Your Choice.');
                switch(choice){
                    case 1:
                        CMD.buyStock(responce.position);
                        break;
                    case 2:
                        CMD.sellStock(responce.position);
                        break;
                    case 3:
                        CMD.printReport(responce.position);
                        break;
                    case 4:
                        return;
                }
                
            }while(choice!=4);
        }else{
            console.log('Given Credentials is wrong. Enter again.');
        }
    }
    main();
}catch(err){
    throw err;
}
