// take 'string' and split it apart into every individual character and put them into a new array - 'splitArr'
// reverse the order of that array into a new 'reverseArr'
// join 'reverseArr' into a string and return it


const reverseString = function(string) {
  const splitArr = string.split('');
  const reverseArr = splitArr.reverse();
  return reversedString = reverseArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
