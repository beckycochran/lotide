const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 'lah', 'dee', 3, 5]), ['lah','dee']);
assertArraysEqual(middle([1, 2, 'lah', 'dah', 'dee', 3, 5]), ['dah']);
