const tail = function(array) {
  let newArr = array.slice((array.length - 1));
  return newArr;
};

module.exports = tail;