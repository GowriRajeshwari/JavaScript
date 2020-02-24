module.exports={
    couponNo:(size) => {
        let val=1,distinct=0,count=0,i=0;
        var person = [];
        while(person.length < size ){
            let random = Math.floor((Math.random() * 10) + 0);
            count++;
            for (let j=0;j<person.length;j++ ){
                if(person[j] == random ){
                    val=0
                    break
                }
                else{
                    val=1
                }
            }
            if( (person.length == 0 ) || (val == 1) ){
                person[i]=random;
                distinct++;
            }
            i++;
        
        }
     
        return{
            count:count,
            distinct : distinct,
        };
    },
    
    distinctValue:(params,size) => {
        for (let j=0;j<params.length;j++ ){
           return params[j];
        }
    },

}

