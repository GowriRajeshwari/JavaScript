const readline = require('readline-sync');
const callfunction =require('./GamblerBL');
try{
    let stake= readline.questionInt('Enter the stake value :');
    let goal = readline.questionInt('Enter the goal Value : ');
    let Trials = readline.questionInt('Enter the Trial value : ');
    let gambler = callfunction.gambler(stake,goal,Trials);
    console.log(gambler.win + " wins of " + Trials );
	console.log("Percent of games won = " + 100.0 * gambler.win / Trials +"%");
    console.log("Avg # bets           = " + 1.0 * gambler.bets / Trials );

}
catch(error){
    console.log(error);
}