const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed! ${actual} equals ${expected}!`);
  } else {
    console.log(`Assertion Failed! ${actual} doesn\'t equal ${expected}!`);
  }
};


const eqArrays = function(array1, array2) {
  
  let count = 0;
  for(let i = 0; i< array1.length; i++){
    for(let j = 0; j < array2.length; j++) {
      if(array1[i] == array2[i]){
        count++;
      }
    }
  }
  if(count === array1.length) {
    return true;
  }
  return false;
}

//NEEDDDDDD TOOOO FIXXX
//
//
//

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
//
//
//

      


const o = {
  a: 1,
  b: 2,
  c: 3
};

const p = {
  a: 1,
  b: 2,
  c: 3
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

console.log(eqObjects(o,p));
console.log(eqObjects(cd,dc));