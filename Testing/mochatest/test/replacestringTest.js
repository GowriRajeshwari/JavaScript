const assert = require('chai').assert;
const read = require('readline-sync');
const app = require('../BL/ReplaceStringBL');
describe('ReplaceString',function(){

    describe('replacestring()',function(){
        it('string length is above 3',function(){
            assert.isAbove(app.replacestring('gowri').length,3);
        })
        it('returning string is in string type',function(){
            assert.typeOf(app.replacestring('gowri'),'string');
        })
        it('string is an anumber',function(){
            assert.equal(app.replacestring(1234),undefined);
        })
        it('string is a decimal value',function(){
            assert.equal(app.replacestring(1.2),undefined);
        })
        it('string is a null',function(){
            assert.equal(app.replacestring(null),undefined);
        })
        it('string is a negative no',function(){
            assert.equal(app.replacestring(-2),undefined);
        })
    })
    
})