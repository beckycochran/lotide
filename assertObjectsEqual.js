const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  let counter = 0;
  if (arr1.length !== arr2.length) {
    return false;
  } else for (let i = 0; i< arr1.length; i++) {
      for(let j = 0; j < arr2.length; j++) {
        if (Array.isArray(arr1[i]) === true && Array.isArray(arr2[j]) === true) {
          if(eqArrays(arr1[i], arr2[j]) === false) {
            return false;
          } else {
              break;
            }
          }
     } if (arr1[i] === arr2[i]) {
            let tempKey = arr1[i];
        if (obj1[tempKey] === obj2[tempKey]) {
          counter++;
         }
       }
    }if (counter === arr1.length) {
      return true; 
  }return false;
}
//NEED TO FIX

const assertObjectssEqual = function(array1, array2) {
  if (eqObjects(obj1, obj2) === true) {
    console.log("Assertion Passed! All object key/values are equal!");
  }
  else {
    console.log("Assertion Failed! At least one object key/value does not match!");
  }
}