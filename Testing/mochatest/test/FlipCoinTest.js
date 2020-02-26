const assert = require('chai').assert;
const app = require('../BL/FlipCoinBL');
describe('ReplaceString',function(){

    describe('replacestring()',function(){
        it('The Head% is greater than zero and less than 100 ',function(){
            assert.isBelow(app.flipcoin(10).headpercent,100);
            assert.isAbove(app.flipcoin(10).headpercent,0);
        })
        it('The Tail% is greater than zero and less than 100 ',function(){
            assert.isBelow(app.flipcoin(10).tailpercent,100);
            assert.isAbove(app.flipcoin(10).tailpercent,0);
        })
        it('The number is less than zero',function(){
            assert.equal(app.flipcoin(0.5),undefined);
        })
        it('Number is undefined',function(){
            assert.equal(app.flipcoin(-5),undefined);
        })
        it('Number is a null',function(){
            assert.equal(app.flipcoin(null),undefined);
        })
        it('Number is a string',function(){
            assert.equal(app.flipcoin("djbf"),undefined);
        })
       
    })
    
})