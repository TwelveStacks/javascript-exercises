const leapYears = function(year) {
    // if ((year % 4 === 0) && (year % 100 !== 0 && year % 400 !== 0) ) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    // Leap year divisible by 4
    // Divisible by 100 are not leap year
    // Unless divisible by 400

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
