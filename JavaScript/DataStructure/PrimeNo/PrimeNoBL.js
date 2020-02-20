module.exports = {
    primeNo: () => {
        let array = [[]];
        var start = 0;
        var end = 100;
        var j1 = 0, j2 = 0;
        for (var i = 0; i < 10; i++) {
            array[i] = [[]];
        }
        for (let i = 0; i < 10; i++) {
            for (let j = start; j < 100; j++) {
                if (module.exports.isPrime(j)) {
                    j1++;
                }
            }
            array[i] = new Array(j1);
            start = end + 1;
            end += 100;
            j1 = 0;
        }
        start = 0;
        end = 100;
        for (let i = 0; i < 10; i++) {
            for (let j = start; j <= end; j++) {

                if (module.exports.isPrime(j)) {
                    array[i][j2] = j;
                    j2++;
                }

            }
            start = end + 1;
            end += 100;
            j2 = 0;
        }
        console.log("The prime numbers between 0-1000 are:");
        start = 0;
        end = 100;
        var str = "";
        for (let i = 0; i < 10; i++) {
            for (let j = start; j <= end; j++) {

                if (module.exports.isPrime(j)) {
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

        
        // printing array
        // for (let i = 0; i < array.length; i++) {
        // 	for (let j = 0; j < array[i].length; j++)
        //     console.log("array["+i+"]["+j+"]" +array[i][j] + " ");
        // }
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

    }

}