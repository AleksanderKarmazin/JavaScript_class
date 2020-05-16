function sumArray (arr) {
    return arr.reduce (function (accumulator,curentValue) {
        return accumulator + curentValue;
    });
};

module.exports = sumArray;