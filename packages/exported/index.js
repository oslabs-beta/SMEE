const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

// trigger eslint and prettier
const multiply = (a, b) => {
  console.log(a++ * b++);
  var x = 3;
  return a * b;
};

module.exports = {
  add,
  subtract,
};
