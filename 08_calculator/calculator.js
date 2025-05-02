const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
  const args = arguments[0];
	return args
  .reduce(
    (accumulator, currentVal) => accumulator + currentVal, 0
  )
};

const multiply = function() {
  const args = arguments[0];
	return args
  .reduce(
    (accumulator, currentVal) => accumulator * currentVal
  )
};

const power = function() {
	return arguments[0] ** arguments[1]
};
const factorial = function() {
  if (arguments.length === 0 || arguments[0] === 0) {
    return 1;
  }
  let result = 1;
  for (let i = arguments[0]; i > 0; i--) {
    result = result * i;
  }
  return result;
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
