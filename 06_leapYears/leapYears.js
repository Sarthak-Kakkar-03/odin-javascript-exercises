const leapYears = function() {
let num = arguments[0];
if (num % 100 === 0) {
    return num % 400 === 0;
}
else {
    return num % 4 === 0;
}
};

// Do not edit below this line
module.exports = leapYears;
