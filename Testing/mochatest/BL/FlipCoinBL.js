module.exports={
    flipcoin:(no)=>{
        let head=0,tail=0;
        for(let i=0;i<no;i++ ){
            let value = Math.random();
            if(value < 0.5 ){
                head++;
            }
            else{
                tail++;
            }
        }
        let headpercent = head/no*100;
        let tailpercent = tail/no*100;
        return{
            headpercent:headpercent,
            tailpercent:tailpercent
        };
       
    }
}