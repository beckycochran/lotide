const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
//takes in two arrays and console.logs an appropriate message to the console

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("Assertion Passed! All array values are equal!");
  }
  else {
    console.log("Assertion Failed! At least one array values does not match!");
  }
}

module.exports = assertArraysEqual;
