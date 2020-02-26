module.exports={
    primefactor:(no)=>{
        if(isNaN(no) ||  no < 0 || Math.floor(no) != no){
            return undefined;
        }else{
        var array =[];
        let j=0;
        while(no % 2 == 0){
           // console.log("2"+ " ");
           array[j]=2;
           j++;
            no=no/2;

        }
        for(let i=3;i*i< no;i++){
            while(no%i == 0){
                console.log(i+" ");
                array[j]=i;
                j++;
                no=no/i;
            }
        }
        if(no>2){
            array[j]=i;
            j++;
            console.log(no);
        }
        return array;
    }
    }
}