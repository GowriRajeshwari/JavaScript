const readline = require('readline-sync');
module.exports={
    replacestring:(name)=>{
        if(name.length > 3){
            let string="Hello <<UserName>>, How are you?";
            let res=string.replace("<<UserName>>",name);
            // console.log(res);
             return res;
        }
        else{
            console.log("Name should max of three character's");
            let name=readline.question("Enter your Name : ");
            let ans=module.exports.replacestring(name);
            return ans;
            
        }
    }
}