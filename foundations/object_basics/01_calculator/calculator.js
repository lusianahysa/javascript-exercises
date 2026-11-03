const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
  let sum = 0;
  for (let i=0; i<numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let prod = 1;
  for (let i=0; i<numbers.length; i++) {
    prod *= numbers[i];
  }
  return prod;

};

const power = function(base, exponent) {
  return base ** exponent;
	
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    let fact = 1;
    for (let i=1; i<=num; i++) {
      fact *= i;
    }
    return fact;
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
