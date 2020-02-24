const readline = require('readline-sync');
const callfunction = require('./PrimeFactorBL');
try{
    let no=readline.questionInt("Enter the no : ");
    let ans=callfunction.primefactor(no);
   // console.log(ans);
}
catch(error){
    console.log(error);
}