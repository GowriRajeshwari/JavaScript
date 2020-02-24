
module.exports={
    bubblesort:(str1) =>{
        var str = str1.split(" ");
       for(let i=0;i<str.length - 1;i++){
        for(let j=0;j<str.length - i ;j++){
            if(str[j] > str[j+1])
            {
                let temp=str[i];
                str[i]=str[j+1];
                str[j+1]=temp;
            }
        }
       }
       return str;
    
}
}