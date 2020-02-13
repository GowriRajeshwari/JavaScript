module.exports={
    binarysearch:(string1)=>{
        var str1="this is binary search program";
        var res=str1.split(" ");
        var result=res.sort();
        let first=0,last=result.length-1,key,value;
        key=string1;
        while(first <= last){
           let mid=parseInt((first+last)/2);
            let ans = key.localeCompare(result[mid]);
            if(ans == 0){
                console.log(result[mid]);
                value=0;
                break;
            }
            else if(ans > 0){
                first=mid+1;
            }else{            
                last=mid-1;
            }           
        }
        if(value == 0){
            return "String is found"
        }
        else{
            return "String is not found"
        }
       //return -1;
        
    }
}