const readline = require('readline-sync');
const callfunction = require('./HarmonicBL');
try{
    let harmonicno= readline.questionInt('Enter harmonic no :');
    let ans = callfunction.generateharmonicno(harmonicno);
    console.log(ans)
}
catch(error){
    console.log(error);
}


