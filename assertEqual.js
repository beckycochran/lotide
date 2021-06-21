// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed!");
  } else {
    console.log("Assertion Failed!");
  }
};



assertEqual("lighthouse Labs", "bootacamp");
assertEqual(1, 1);
assertEqual(1, 1.1);
assertEqual("Mary", "Mary");
assertEqual("Mary", "mary");