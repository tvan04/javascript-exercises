const sumAll = function(a,b) {
    if (Number.isInteger(a) != true || Number.isInteger(b) != true) return ("ERROR");
    if (a < 0 || b < 0) return ("ERROR");
    if (a > b) {
        var c = a;
        a = b;
        b = c;
        
    }
    var sum = 0;
    for (let i = a; i < b + 1; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
