const readline = require('readline-sync');
const callfunction = require('./LeapYearBL');
try{
    let year=readline.questionInt("Enter the year : ");
    let ans=callfunction.leapyear(year);
    console.log(ans);
}
catch(error){
    console.log(error);
}