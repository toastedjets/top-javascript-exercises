const removeFromArray = function(array, ...items) {
    const newArray = [];

    array.forEach((item) => {
        if (!items.includes(item))
            newArray.push(item);
    });
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
