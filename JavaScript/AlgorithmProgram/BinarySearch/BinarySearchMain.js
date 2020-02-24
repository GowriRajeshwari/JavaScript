const readline = require('readline-sync');
const callfunction = require('./BinarySearchBL');


const fs=require('fs');
async function test() {
    try {
        let file = await callfunction.filereading();
        console.log("in main",file);
        let string1=readline.question("Enter the string to search : ");
         let ans = callfunction.binarysearch(string1,file);
        console.log(ans);
    }
    catch (error) {
        console.log(error);
    }
}

test();