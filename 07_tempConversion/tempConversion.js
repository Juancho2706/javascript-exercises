const convertToCelsius = function(fahrenheit) {
  let encelsius = 0;
  encelsius = (fahrenheit - 32) * .5556;
  return Math.round(encelsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let enfahrenheit = 0;
  enfahrenheit = (celsius * 1.8) + 32;
  return Math.round(enfahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
