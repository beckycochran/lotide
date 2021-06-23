const eqArrays = function(array1, array2) {
  let count = 0;
  for(let i = 0; i< array1.length; i++){
    if(array1[i] == array2[i]){
      count++;
    }
  }
  if(count === array1.length) {
    return true;
  }
  return false;
}

//takes in two arrays and console.logs an appropriate message to the console

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("Assertion Passed! All array values are equal!");
  }
  else {
    console.log("Assertion Failed! At least one array values does not match!");
  }
}

assertArraysEqual([1,2],[1,2]);
assertArraysEqual([1,2],[1,3]);