module.exports={
    /**
     * One string is an anagram of another string.
     * @param {string1,string2} string1,string2 - Getting the two string from user for checking it is an anagram or not.
     * @return {true} if the string's are anagram.
     */
    Anagram :(string1,string2)=>{
        if(string1.length != string2.length ){
            return false;
        }
        var res1 = string1.split("");
        res1.sort();
        var res2 = string2.split("");
        res2.sort();
        for(let i=0;i<res2.length;i++){
            if(res1[i] != res2[i]){
                return false
            }
        }
        return true;
    }
}