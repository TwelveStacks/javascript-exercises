const convertToCelsius = function(temp) {
  console.log(Math.round((temp - 32)*(5/9)*10)/10);
  return Math.round((temp - 32)*(5/9)*10)/10;
};

const convertToFahrenheit = function(temp) {
  return parseFloat(((temp * 9)/5 + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
