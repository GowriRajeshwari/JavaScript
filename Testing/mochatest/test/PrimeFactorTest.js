const assert = require('chai').assert;
const app = require('../BL/PrimeFactorBL');
describe('Prime Factor',function(){

    describe('primefactor()',function(){
        it(' Number is an string',function(){
            assert.equal(app.primefactor('ffdd'),undefined);
        })
        it(' Number is an decimal value',function(){
            assert.equal(app.primefactor(0.5),undefined);
        })
        it(' Number is an Negative value',function(){
            assert.equal(app.primefactor(-3),undefined);
        })
        it(' Number is Null',function(){
            assert.equal(app.primefactor(null),undefined);
        })
        it(' prime factor of 8 is 2,2,2',function(){
            assert.equal(app.primefactor(8).toString(),[2,2,2].toString());
        })
        it(' prime factor return type is an array',function(){
            assert.typeOf(app.primefactor(8),'Array');
        })
       
    })
    
})