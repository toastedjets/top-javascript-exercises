const fibonacci = function(number) {
    const ZERO = 0;
    const ONE = 1;

    const array = [ZERO, ONE];

    if (typeof number !== "number") {
        number = parseInt(number);
    }

    if (number === 0) return ZERO;
    else if (number === 1) return ONE;
    else if (number >= 2) {
        for (let i = 2; i <= number; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
    } else return "OOPS";

    return array[number];
};

// Do not edit below this line
module.exports = fibonacci;
