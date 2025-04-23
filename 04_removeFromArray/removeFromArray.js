const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let idx = array.indexOf(arguments[i]);
        while (idx !== -1) {
            array.splice(idx, 1);
            idx = array.indexOf(arguments[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
