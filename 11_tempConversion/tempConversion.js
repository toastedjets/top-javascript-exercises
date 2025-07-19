const convertToCelsius = function(temperature) {
  const celsius = (temperature - 32) * 5 / 9;
  const rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temperature) {
  const fahrenheit = (temperature * 9 / 5) + 32;
  const rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
