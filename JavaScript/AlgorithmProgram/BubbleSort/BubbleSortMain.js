const readline = require('readline-sync');
const callfunction = require('./BubbleSortBL');
try{
    let str1=readline.question("Enter the string to sort : ");
    let ans=callfunction.bubblesort(str1);
    console.log(ans);
}
catch(error){
    console.log(error);
}
