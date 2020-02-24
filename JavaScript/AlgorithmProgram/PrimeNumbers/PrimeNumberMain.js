const readline = require('readline-sync');
const callfunction = require('./PrimeNumberBL');
try{
    let ans=callfunction.primeNo();
   // console.log(ans);
}
catch(error){
    console.log(error);
}