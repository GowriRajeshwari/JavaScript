const readline=require("readline-sync")
const callfunction=require("./CouponBL")
try{
    let size= readline.questionInt('Enter how values to store :');
    let ans = callfunction.couponNo(size);
    console.log("No of times the random values generate : "+ans.count);
   // let distinct = callfunction.distinctValue(ans.person,size);
    console.log("distinct value : "+ans.distinct);
}
catch(error){
    console.log(error);
}