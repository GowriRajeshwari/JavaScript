const assert = require('chai').assert;
const app = require('../BL/Powerof2BL');
describe('ReplaceString', function () {

  describe("pow", function () {
    it('Passing value is string', function () {
      assert.equal(app.powerof2('gh', 'hh'), undefined);
    });
    it('value is null', function () {
      assert.equal(app.powerof2(null, null), undefined);
    });
    it('value is a negative no', function () {
      assert.equal(app.powerof2(-2,-2), undefined);
    })
    it('value is a decimal no', function () {
      assert.equal(app.powerof2(0.5), undefined);
    })
    function makeTest(x) {
      let expected = x * 2;
      it(` 2 in the power ${x} is ${expected}`, function () {
        assert.equal(app.powerof2(x, 2), expected);
      });
    }

    for (let x = 1; x <= 3; x++) {
      makeTest(x);
    }

  });

})