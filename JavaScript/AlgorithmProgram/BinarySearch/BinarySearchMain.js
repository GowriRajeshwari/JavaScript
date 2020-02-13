const readline=require('readline-sync');
const callfunction = require('./BinarySearchBL');
try{
    let string1=readline.question("Enter the string to search : ");
    let ans = callfunction.binarysearch(string1);
    console.log(ans);
}
catch(error){
    console.log(error);
}