const sumAll = function() {
    result = 0;
    if (!(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1]))) {
        return 'ERROR';
    } else if (arguments[0] < 0 || arguments[1] < 0) {
        return 'ERROR';
    }
    let smaller_num = -1;
    let larger_num = -1;
    if (arguments[0] > arguments[1]) {
         larger_num = arguments[0];
         smaller_num = arguments[1];
    } else {
         larger_num = arguments[1];
         smaller_num = arguments[0];
    }
    for (let i = smaller_num; i <= larger_num; i++) {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
