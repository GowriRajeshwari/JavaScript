module.exports={
    windchill:(t,v)=>{

        if(t <= 50 && t>0 || v<= 120 && v>3){
            return 35.74 + 0.6215 * t + (0.4275 * t -35.75) * Math.pow(v,0.16);
        }
        else{
            console.log("Enter the t and v with the range");
        }
    }
}