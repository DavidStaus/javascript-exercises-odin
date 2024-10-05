const removeFromArray = function(arr, ...targets) {
    for (let target of targets) {
        while (arr.indexOf(target) > -1) {
            arr.splice(arr.indexOf(target), 1);
        }
    }
    return arr;
};


const removePush = function (array, ...arguments) {
    const newArray = [];
    array.forEach( (arrayItem) => {
        if (!arguments) {
            newArray.push(arrayItem);
        }
    });
    return newArry;
} 

const removeFilter = function (array, ...args) {
    return array.filter(value => !args.includes(value))
}

// Do not edit below this line
module.exports = removeFromArray;
