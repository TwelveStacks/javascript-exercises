const sumAll = function(start, end) {
    let sum = 0;
    let temp = start;

    if (start < 0 || end < 0) {
        return "ERROR"
    }
    
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR"
    }
    

    if (start > end) {
        temp = end
        end = start
        start = temp
    }   
    
    for (i = start; i < end + 1; i++) {
        sum += temp;
        temp += 1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
