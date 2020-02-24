module.exports = {
    permutationusingrecursion: () => {

    },
    permutationusingiterative: (string) => {
        var array = [];
        let char = string.charAt(0);
        array.push(char.valueOf());
        for (let i = 0; i < string.length; i++) {
            for (let j = array.length - 1; j >= 0; j--) {
                let str = array.splice(j);
                console.log(str);
                for (let k = 0; k <= array.length; j++) {

                    array.push(String(str).substr(0, k) + String(array).charAt(i) + String(str).substr(k));
                    console.log(array);
                }
            }
        }
        return array;

    }
}