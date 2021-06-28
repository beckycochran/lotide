
//fucntion eqArrays
//takes in two arrays
//returns true or false, based on a perf match

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

module.exports = eqArrays;

