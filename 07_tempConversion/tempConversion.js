// x °F ≘ (x − 32) × ⁠5/9⁠ °C 
// to 1 decimial: 
// const num = 3.14159;
// const roundedNum = Math.round(num * 10) / 10; 
// console.log(roundedNum); // Output: 3.1
const convertToCelsius = function(tempF) {
  return Math.round((tempF - 32) * (5 / 9) * 10) / 10;
};

// x °C ≘ (x × ⁠9/5⁠ + 32) °F 
const convertToFahrenheit = function(tempC) {
  return Math.round((tempC * (9 / 5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
