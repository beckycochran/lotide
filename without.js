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

// wtihout returns a subset of a given array, removing uwanted elements
//takes in a source array
//and an itemsToRemove array
//returns new array with only elements from source that are not present in iTR array


const without = function(source, itemsToRemove) {
  let a = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        a.push(source[i]);
      }
    }
  }return a;
}

let b = ['this','that','the other thing'];
let c = ['this'];


console.log(without([1,2,3,4],[4]));
console.log(without([1,"labs",3,"lighthouse"],["labs"]));
console.log(without(b,c), b);

