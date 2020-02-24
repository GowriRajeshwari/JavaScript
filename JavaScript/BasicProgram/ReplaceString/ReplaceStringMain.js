const readline = require('readline-sync');
const callfunction = require('./ReplaceStringBL');
try{
    let name=readline.question("Enter your Name : ");
    let ans=callfunction.replacestring(name);
    console.log(ans);
}
catch(error){
    console.log(error);
}