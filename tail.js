const assertEqual = require('./assertEqual');


const tail = function(array) {
  let newArr = array.slice(1,(array.length));
  return newArr;
};

module.exports = tail;
