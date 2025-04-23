const convertToCelsius = function() {
  let farenheitVal = arguments[0];
  return Math.round(((farenheitVal - 32) * 5/9) * 10)/10;
};

const convertToFahrenheit = function() {
  let celciusVal = arguments[0];
  return Math.round(((celciusVal * (9/5)) + 32) * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
