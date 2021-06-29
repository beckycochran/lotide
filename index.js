// index.js

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');




module.exports = {
  eqArrays : eqArrays,
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  head:   head,
  tail:   tail,
  middle: middle
};
