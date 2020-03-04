module.exports = {
    balancedparentheses:(string)=>{
        let stack = [];
        let open ={
            '{' : '}',
            '[' : ']',
            '(' : ')'
        }
        let close ={
            '}': true,
            ']':true,
             ')' : true,
        }
        for(let i=0;i<string.length;i++){
            let char =string[i];
            if(open[char]){
                stack.push(char);
            }
            else if(close[char]){
                if (open[stack.pop()] !== char) return false;
            }
        }
       
        return stack.length == 0;
    }
}