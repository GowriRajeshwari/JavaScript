const assert = require('chai').assert;
const read = require('readline-sync');
const app = require('../BL/LeapYearBL');
describe('Leap Year',function(){

    describe('LeapYear()',function(){
        it('Given Year is not an 4 digit number',function(){
            assert.equal(app.leapyear(200).toString().length,3);
        })
        it('Given Year is an leap year',function(){
            assert.equal(app.leapyear(2000),true);
        })
        it('Given Year is an not leap year',function(){
            assert.equal(app.leapyear(2010),false);
        })
        it(' Year is an string',function(){
            assert.equal(app.leapyear('ffdd'),undefined);
        })
        it(' Year is an decimal value',function(){
            assert.equal(app.leapyear(0.5),undefined);
        })
        it(' Year is an Negative value',function(){
            assert.equal(app.leapyear(-3),undefined);
        })
        it(' Year is Null',function(){
            assert.equal(app.leapyear(null),undefined);
        })
       
    })
    
})