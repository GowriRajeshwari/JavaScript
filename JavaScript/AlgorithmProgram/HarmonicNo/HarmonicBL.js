module.exports={
    generateharmonicno:(a) => {
        let har=0.0
        for (let i=1 ;i<= a;i++){
            har= har + (1/i);
        }
        return har;
    },
}