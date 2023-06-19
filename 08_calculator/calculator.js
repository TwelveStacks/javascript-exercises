const add = function(...args) {
	return args.reduce((a, b) => a+b, 0);
};

const subtract = function(...args) {
	return args.reduce((a, b) => a-b);
};

const sum = function(array) {
	let output = 0;
  for (i = 0; i < array.length; i++) {
    output += array[i];
  }
  return output;
};

const multiply = function(...args) {
  return args.reduce((a, b) => a*b);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
