const removeFromArray = function(array, ...args) {
// declare new array
    const output = [];
// Loop through array
    for (i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            output.push(array[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
