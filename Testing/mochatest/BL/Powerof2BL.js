module.exports={
    powerof2:(x, n)=> {
        if(isNaN(x) && isNaN(n) || x == null && n==null ||  (x &&n) < 0 || Math.floor(x) != x){
            return undefined;
        }
        else{
            let result = 1;
      
            for (let i = 0; i < n; i++) {
              result = x * 2;
            }
          
            return result;
        }
      
      }
}