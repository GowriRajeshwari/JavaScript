module.exports={
    replacestring:(name)=>{
        if(name.length > 3){
            let string="Hello <<UserName>>, How are you?";
            var res=string.replace("<<UserName>>",name);
            return res;
        }
        else{
            return "Name should max of three character's";
            
        }
    }
}