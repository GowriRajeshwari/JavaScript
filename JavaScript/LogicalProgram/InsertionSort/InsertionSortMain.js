const readline = require('readline-sync');
const callfunction = require('./InsertionSortBL');
try{
    let ans=callfunction.insertionsort();
    console.log(ans);
}
catch(error){
    console.log(error);
}
