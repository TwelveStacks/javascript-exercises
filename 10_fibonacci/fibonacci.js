const fibonacci = function(n) {
    var arr = [0,1];
    var n1 = 0;
    var n2 = 1;

    if ((n <= 0) || (typeof Number(n) === 'string')) {
        return 'OOPS';
    }

    for (let i = 0; i < n; i++) {
        var n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        arr.push(n3);
    }
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
