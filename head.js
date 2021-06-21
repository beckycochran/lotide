const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed! ${actual} equals ${expected}!`);
  } else {
    console.log(`Assertion Failed! ${actual} doesn\'t equal ${expected}!`);
  }
};

const head = function(array) {
  if (array.length > 0){
    return array[0];
  }else{
    return undefined;
  }
}


assertEqual(head([5,6,7]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3]), 3);