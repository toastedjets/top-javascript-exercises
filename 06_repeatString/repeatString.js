const repeatString = function(string, repeat) {
    let strings = "";
    if (repeat < 0)
        return "ERROR";
    else for (let i = 0; i < repeat; i++) {
        strings += string;
    }
    
    return strings;
};

// Do not edit below this line
module.exports = repeatString;
