const readline = require('readline-sync');
const callfunction = require('./Powerof2BL');
try{
    
    let ans=callfunction.powerof2(process.argv[2]);
}
catch(error){
    console.log(error);
}