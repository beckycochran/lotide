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

const letterPositions = function(sentence) {
  const obj = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (obj[sentence[i]]) {
        obj[sentence[i]].push(i);
      } else {
        obj[sentence[i]] = [i];
      }
    } 
  }return obj;
};

console.log(letterPositions('hello hi'));