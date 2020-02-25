const readline = require('readline-sync');
module.exports={
    replacestring:(name)=>{
        let string="Hello <<UserName>>, How are you?";
        if(name.length > 3){
            let res=string.replace("<<UserName>>",name);
            // console.log(res);
             return res;
        }
        return string;
        
    }
}