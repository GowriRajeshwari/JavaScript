const readline=require('readline-sync');
const callfunction=require('./PermutationComparsionBL')
try{
    let string=readline.question("Enter the string : ");
    let ans=callfunction.permutationusingiterative(string);
    console.log(ans);
}
catch(error){
    console.log(error);
}