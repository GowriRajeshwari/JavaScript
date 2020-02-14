const readline = require('readline-sync');
const callfunction = require('./TicTacToeBL');
try{
    var tic = new callfunction.TicTacToe();
    tic.play();
    
   // let ans=callfunction.initialboard();

}
catch(error){
    console.log(error);
}