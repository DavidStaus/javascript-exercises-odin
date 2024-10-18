const palindromes = function (string) {
    let array = string.toLowerCase().split('')
    for (let i = array.length - 1; i >= 0; i--) {
        if (!array[i].match(/[a-zA-Z0-9]/g)) {
            array.splice(i, 1);
        }
    }
    return array.join() === array.reverse().join('')
     
    
};

const palindromesV2 = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter(character => alphanumerical.includes(character))
        .join();

    const reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;
}

/*
take a string and remove all space and non-letter non-numbers
make the string lowercase
*/

// Do not edit below this line
module.exports = palindromes;
