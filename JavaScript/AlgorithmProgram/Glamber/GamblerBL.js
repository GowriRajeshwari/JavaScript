module.exports={
    gambler:(stake,goal,Trials) => {
        let bets=0,win=0;
        for (let i=0 ;i<Trials;i++){
          if(stake>0 && stake<goal){
              bets++;
              if(Math.random() < 0.5){
                  stake++;
                  console.log(Math.random()+":"+stake)
              }
              else{
                  stake--;
                  console.log(Math.random()+":"+stake)
              }
              
          }
        }
        if(stake==goal){
            win++;
        }
        return {
            win: win,
            bets: bets,
        };
    },
}