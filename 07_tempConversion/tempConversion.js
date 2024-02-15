const convertToCelsius = function(temp) {
  //32°F − 32) × 5/9 = 0°C
  //round to the tenth
  //var num = 2.12;
  //var round = num.toFixed(1); will out put 2.1 of type String
  let num = (temp - 32)*(5/9);
  let round = Number(num.toFixed(1));
  return round

};
const convertToFahrenheit = function(temp) {
  //C*(9/5)+32 =F
  //round to the tenth
  //var num = 2.12;
  //var round = num.toFixed(1); will out put 2.1 of type String
  let  num = temp*(9/5)+32;
  let round= Number(num.toFixed(1));
  return round
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
