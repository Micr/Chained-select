var assert = require('chai').assert;
var createSelectsArray = require('../reducers').default

describe('reducers:createSelectsArray', function () {
  var setId = {
    type: 'SET_ID'
  }
  it('test that reducer returns array by default', function() {
    assert.isArray(createSelectsArray());
  })
  it('test that reducer returns array of one element by default', function() {
    assert(createSelectsArray().length, 1);
  })
  it('test that reducer returns array of one object by default', function() {
    var defaultState = createSelectsArray();
    assert.isObject(defaultState[0]);
  })
});
