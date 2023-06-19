const palindromes = function (str) {
    var punctuation = /[\.,?!]/g;
    var temp = str.toLowerCase().replace(punctuation, "").replace(/\s/g, "");
    return temp.split("").reverse().join("") == temp;
};

// Do not edit below this line
module.exports = palindromes;
