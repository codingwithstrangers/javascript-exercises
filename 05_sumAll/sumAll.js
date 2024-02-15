const sumAll = function (first_num, last_num) {
  //we need to find out if the numbers are actually numbers
  //use typeof, or isNan (look this up)
  if (
    typeof first_num !== "number" ||
    first_num < 0 ||
    typeof last_num !== "number" ||
    last_num < 0
  ) {
    //if not numbers 'ERROR'
    return "ERROR";
  }

  //we need the small number first
  let sum = 0;
  let min = Math.min(first_num,last_num);
  let max = Math.max(first_num,last_num);

  //add some shit up
  for (let i = min; i <= last_num; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
