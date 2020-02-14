const readline = require('readline-sync');
module.exports={
    leapyear:(year)=>{
        if(year.toString().length == 4){
            if( (year % 4 == 0 ) && (year % 100 == 0) || (year % 400 == 0) ){
                return "Given Year is the Leap Year";
            }
            else{
             return "Given Year is Not an Leap Year";
            }
        }
        else{
            console.log("Ensure whether it is 4 digit no");    
            let year=readline.questionInt("Enter the year : ");
            let ans=module.exports.leapyear(year);
            return ans;
        }
       
    }
}