module.exports={
    generateharmonicno:(a) => {
        if (isNaN(a) || a < 0 || Math.floor(a) != a ) {
            return undefined;
        }
        else{
        let har=0.0
        for (let i=1 ;i<= a;i++){
            har= har + (1/i);
        }
        return har;
    }
    },
}