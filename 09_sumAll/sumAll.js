const sumAll = function(start, end) {
    let sum = 0;
    
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0)
        return "ERROR";
    
    else if (start < end) {
        for (let i = start; i <= end; i++)
            sum += i;
    }

    else if (start > end) {
        for (let i = start; i >= end; i--)
            sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
