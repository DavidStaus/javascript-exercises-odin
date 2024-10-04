// take 'string' and split it apart into every individual character and put them into a new array - 'splitArr'
// reverse the order of that array into a new 'reverseArr'
// join 'reverseArr' into a string and return it


const reverseString = function(string) {
  return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
