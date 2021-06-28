//const eqArrays = require('../eqArrays');
//const assertArraysEqual = require('../assertArraysEqual');


//middle funct
//takes in array
//returns only the middle
//if there are one or two, return empty array
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  else {
    if (array.length % 2 === 0) { //even, return array with 2
      while (array.length > 2) {
        array.splice(0,1);
        array.splice(array.length - 1, 1);
      }return array;
    }
    if (array.length % 2 !== 0) { //odd, return array with 1
      while (array.length > 1) {
        array.splice(0,1);
        array.splice(array.length - 1, 1);
      }return array;
    }
  }
}

module.exports = middle;