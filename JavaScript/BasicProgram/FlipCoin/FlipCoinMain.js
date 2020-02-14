const readline = require('readline-sync');
const callfunction = require('./FlipCoinBL');
try{
    let no=readline.questionInt("Enter No of times the coin want to flip : ");
    let ans=callfunction.flipcoin(no);
    console.log("Percentage of head : "+ans.headpercent+"%"+" , Percentage of tail : ",ans.tailpercent+"%");
}
catch(error){
    console.log(error);
}