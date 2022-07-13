const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let fullstring = "";
    for (let i = 0; i < num; i++) {
        fullstring += string;
    }
   return fullstring;
};

// Do not edit below this line
module.exports = repeatString;
