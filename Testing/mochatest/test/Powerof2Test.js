const assert = require('chai').assert;
const app = require('../BL/Powerof2BL');
describe('ReplaceString',function(){

    describe("pow", function() {

        function makeTest(x) {
          let expected = x * 2 ;
          it('Passing value is not an number', function() {
            assert.equal(app.powerof2('gh', 'hh'), undefined);
          });
          it(` 2 in the power ${x} is ${expected}`, function() {
            assert.equal(app.powerof2(x, 2), expected);
          });
        }
      
        for (let x = 1; x <= 3; x++) {
          makeTest(x);
        }
      
      });
    
})