const removeFromArray = function(arr, ...targets) {
    for (let target of targets) {
        while (arr.indexOf(target) > -1) {
            arr.splice(arr.indexOf(target), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
