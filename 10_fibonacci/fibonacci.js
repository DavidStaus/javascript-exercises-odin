const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let fib = 0;
    let firstNum = 0;
    let secondNum = 1;
    for (let i = 2; i <= n; i++) {
        fib = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = fib;
    }
    return fib
};

// first add 1 and 0, then 1 and 1, and then 1 and 2, then 2 and 3, 3 and 5, then 

// Do not edit below this line
module.exports = fibonacci;

