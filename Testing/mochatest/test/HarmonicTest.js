const assert = require('chai').assert;
const read = require('readline-sync');
const app = require('../BL/HarmonicBL');
describe('Harmonic No',function(){

    describe('generateharmonicno()',function(){
        it('Harmonic No for 2 is 1.5',function(){
            assert.equal(app.generateharmonicno(2),1.5);
        })
        it(' Number is an string',function(){
            assert.equal(app.generateharmonicno('ffdd'),undefined);
        })
        it(' Number is an decimal value',function(){
            assert.equal(app.generateharmonicno(0.5),undefined);
        })
        it(' Number is an Negative value',function(){
            assert.equal(app.generateharmonicno(-3),undefined);
        })
        it(' Number is Null',function(){
            assert.equal(app.generateharmonicno(null),undefined);
        })
       
    })
    
})