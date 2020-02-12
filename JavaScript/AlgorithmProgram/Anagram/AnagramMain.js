const readline=require('readline-sync');
const callfunction=require('./AnagramBL');
try{
    let string1 = readline.question("Enter the first string : ");
    let string2 = readline.question("Enter the second string : ");
    let anagram = callfunction.Anagram(string1,string2);
    console.log(anagram);
}
catch(error){
    console.log(error);
}