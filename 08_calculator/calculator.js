const add = function (num1, num2) {
  return Number(num1 + num2);
};

const subtract = function (num1, num2) {
  return Number(num1 - num2);
};

const sum = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  //   let result = 0;
  //   for (i = 0; i< arr.length; i++){
  //     result += arr[i];
  //   }
  // 	return result
};

const multiply = function (arr) {
  let result = 1;
  for (i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function (num1, num2) {
  return Number(num1 ** num2);
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
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
  factorial,
};
