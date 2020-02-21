module.exports = {
    primeNo: () => {
        let array = [[]];
        var start = 0;
        var end = 100;
        var j1 = 0, j2 = 0;
        for (var i = 0; i < 10; i++) {
            array[i] = [[]];
        }
        start = 0;
        end = 100;
        for (let i = 0; i < 10; i++) {
            let j=0;
            array[i][j] = start.toString()+"-"+end.toString();
            start = end + 1;
            end += 100;
        }

        start = 0;
        end = 100;
        let j3 = 0;
        var prime = [];
        for (let i = 0; i < 10; i++) {
            for (let j = start; j <= end; j++) {
                if (module.exports.isPrime(j)) {
                    prime[j2] = j;
                    j2++;
                }
            }
             module.exports.anagram(prime, array, i,j3);
             prime=[];
            start = end + 1;
            end += 100;
            j2 = 0;

        }
        console.log("The prime numbers between 0-1000 are:");
        start = 0;
        end = 100;
        var str = "";
         j2=0;
        for (let i = 0; i < 10; i++) {
            for (let j = start; j <= end; j++) {
                if(array[i][j2] != undefined){
                    str += array[i][j2] + " ";
                    j2++;
                }
            }
            start = end + 1;
            end += 100;
            j2 = 0;
            console.log(str);
            str ="";

        }
     
    },
    isPrime: (num) => {

        if (num == 0 || num == 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;

    },
    anagram: (prime, array, ii) => {
        let j3 = 1;
        for (let i = 0; i < prime.length; i++){
            
            for (let j = i + 1; j < prime.length; j++) {
                
                if (module.exports.areAnagram(prime[i].toString(), prime[j].toString())) {
                    array[ii][j3] = prime[i];
                    console.log("  " + ii + "  " + j3 + "   " + prime[i]);
                    j3++;
                    
                }
                
            }
        }
        
    },
    areAnagram: (string1, string2) => {
        if (string1.length != string2.length) {
            return false;
        }
        var res1 = string1.split("");
        res1.sort();
        var res2 = string2.split("");
        res2.sort();
        for (let i = 0; i < res2.length; i++) {
            if (res1[i] != res2[i]) {
                return false
            }
        }
        return true;
    }
}