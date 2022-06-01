function sum(number1, number2) {
    var DECIMAL = 10;
    return parseInt(number1, DECIMAL) + parseInt(number2, DECIMAL);
}

parseInt('10px'); // 10
parseInt('10px', 10); // 10
parseInt('0x'); // NaN
parseInt('0x', 10) // 0
