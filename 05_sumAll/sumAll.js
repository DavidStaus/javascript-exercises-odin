const sumAll = function(smallNum, bigNum) {
    if (!Number.isInteger(smallNum) || smallNum < 0 ||!Number.isInteger(bigNum) || bigNum < 0) {
            return 'ERROR';
        }
    // Swaps values of smallNum and bigNum to avoid user error
    if (smallNum > bigNum) {
        const temp = smallNum;
        smallNum = bigNum;
        bigNum = temp;
    }

    let finalSum = 0
    for (let i = bigNum; i >= smallNum; i--) {
        finalSum += i;
    }
    return finalSum;
    }
  

// function that takes two bigNumbers as Parameters
// it then finds every integer between them and outputs into an Array
// then it adds 1 bigNumber to a new variable for the final sum and loops that

// Do not edit below this line
module.exports = sumAll;
