

const repeatString = (string, num) => {
    let newString = '';
    
    for (let i = 1; i <= num; i++) {
        newString += string;
    }
    if (num < 0) {
        return 'ERROR';
    } else {
        return newString;
    }
};



// Do not edit below this line
module.exports = repeatString;
