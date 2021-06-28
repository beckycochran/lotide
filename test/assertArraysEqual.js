const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([1,2,3,4],[1,2,3,5]);
assertArraysEqual(['this','is','equal'],['this','is','equal']);
assertArraysEqual(['this','is','equal'],['this','is','not']);