function sum(numero1, numero2) {
    var DECIMAL = 10;
    return parseInt(numero1, DECIMAL) + parseInt(numero2, DECIMAL);
}

parseInt('10px'); // 10
parseInt('10px', 10); // 10
parseInt('0x'); // NaN
parseInt('0x', 10) // 0
