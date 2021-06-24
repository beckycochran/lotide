const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed! ${actual} equals ${expected}!`);
  } else {
    console.log(`Assertion Failed! ${actual} doesn\'t equal ${expected}!`);
  }
};


const countLetters = function(sentence) {
  //return a count of each of the letters 
  let obj = {};
  for (letter of sentence) {
    if (letter !== ' ') {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    } 
  }return obj;
}

console.log(countLetters('my string'));
console.log(countLetters('my stringgggg'));
console.log(countLetters('Rebekah'));