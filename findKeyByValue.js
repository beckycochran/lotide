const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed! ${actual} equals ${expected}!`);
  } else {
    console.log(`Assertion Failed! ${actual} doesn\'t equal ${expected}!`);
  }
};


const findKeyByValue = function(obj, val) {
  //scan object (key in obj)
  //return first key which contains the given value
  //if none is found, return undefined
  const objArray = Object.keys(obj);
  for (const element of objArray) {
    if(obj[element] === val) {
      return element;
    }
  }return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
