module.exports={
    powerof2:(x, n)=> {
        if(!isNaN(x) && !isNaN(n) ){
            let result = 1;
      
            for (let i = 0; i < n; i++) {
              result = x * 2;
            }
          
            return result;
        }
        else{
            return undefined;
        }
      
      }
}