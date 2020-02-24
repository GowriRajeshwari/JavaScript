
module.exports={
     /**
     * Sorting the given string.
     * @param {str} str - Getting the string from user.
     * @return {array} The sorted String.
     */
    insertionsort:(str) =>{
       var s=str.split(" ");
       var s2 = [];
       for (let i=1 ;i<s.length; i++) 
	    { 
	        let temp = s[i]; 
	        let j = i - 1; 
	        while (j >= 0 && temp.localeCompare(s[j]) >= 0) 
	        { 
	            s[j+1] = s[j]; 
	            j--; 
	        } 
	        s[j+1] = temp; 
        } 
        let a = 0;
        for (let k=s.length-1;k>=0 ; k--) 
        {
            //console.log(s[k]+" "); 
            s2[a]=s[k];
            a++;

        }
        return s2;
        
    
}
}