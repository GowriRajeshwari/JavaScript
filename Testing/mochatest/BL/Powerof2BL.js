module.exports={
    powerof2:(no)=>{
        if(0 <= no && no < 31){
            let power=2;
            for(let i=1;i<=no;i++){
                console.log("2 ^ "+i+"= "+power);
                power = power * 2 ;
            }
            //return "Power of 2 is completed"
        }
        else{
            console.log("The no should not greater than 31 & less than 0");
        }
       
    }
}