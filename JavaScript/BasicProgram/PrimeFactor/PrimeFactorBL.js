module.exports={
    primefactor:(no)=>{
        while(no % 2 == 0){
            console.log("2"+ " ");
            no=no/2;
        }
        for(let i=3;i*i< no;i++){
            while(no%i == 0){
                console.log(i+" ");
                no=no/i;
            }
        }
        if(no>2){
            console.log(no);
        }
       
    }
}