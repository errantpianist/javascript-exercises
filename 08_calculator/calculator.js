const add = function(operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(index, power) {
  return index ** power;
	
};

const factorial = function(n) {
  if(n === 0) return 1;
    let product = 1;
    for (let index = 1; index <= n; index++) {
      product *= index
      
  }
  return product;
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
