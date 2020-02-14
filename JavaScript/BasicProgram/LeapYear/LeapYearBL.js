module.exports={
    leapyear:(year)=>{
        if(year.length == 4){
            if( (year % 4 == 0 ) && (year % 100 == 0) || (year % 400 == 0) ){
                return "Given Year is the Leap Year";
            }
            else{
             return "Given Year is Not an Leap Year";
            }
        }
        else{
            return "Ensure whether it is 4 digit no";
        }
       
    }
}