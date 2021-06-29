const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns []] for [1, 2]", () => {
    assert.deepEqual(head(middle([1, 2]), []));
  });

  it("returns ['lah','dee'] for [1, 2, 'lah', 'dee', 3, 5]", () => {
    assert.deepEqual(middle([1, 2, 'lah', 'dee', 3, 5]), ['lah','dee']); 
  });
});


