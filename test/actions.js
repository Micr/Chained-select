var assert = require('chai').assert;
var setId = require('../actions').default;

describe('Actions:setId', function () {
  it ('Should return an action in a correct format', function () {
    assert.deepEqual(setId(1), { type: 'SET_ID', id: 1 });
  })
});
