//take in two arguments
//array to map and callback func
//returns a new array based on the results of the callback


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


const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const wordsAfter = ['g', 'c', 't', 'm', 't'];
const results1 = map(words, word => word[0]);
assertArraysEqual(wordsAfter, results1);

const words2 = [[1,2],[1,2,'word'],['first',2]];
const wordsAfter2 = [1,1,'first'];
const results2 = map(words2, word => word[0]);
assertArraysEqual(wordsAfter2, results2);


