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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("Assertion Passed! All array values are equal!");
  }
  else {
    console.log("Assertion Failed! At least one array values does not match!");
  }
}

//middle funct
//takes in array
//returns only the middle
//if there are one or two, return empty array


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


console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, "lah", "dee", 5, 6]));
console.log(middle([1, 'dah', 3]));