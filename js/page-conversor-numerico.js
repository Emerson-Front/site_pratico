// Pegar valor do decimal e converter para binario, octal e hexadecimal
document.getElementById("input_decimal").addEventListener('input', function () {
    const decimal = this.value;
    document.getElementById("input_binario").value = decimal_binario(decimal);
    document.getElementById("input_octal").value = decimal_octal(decimal);
    document.getElementById("input_hexadecimal").value = decimal_hexadecimal(decimal);
});

// Pegar valor do binario e converter para decimal, octal e hexadecimal
document.getElementById("input_binario").addEventListener('input', function () {
    const binario = this.value;
    document.getElementById("input_decimal").value = binario_decimal(binario);
    document.getElementById("input_octal").value = binario_octal(binario);
    document.getElementById("input_hexadecimal").value = binario_hexadecimal(binario);
});

// Pegar valor do octal e converter para binario, decimal e hexadecimal
document.getElementById("input_octal").addEventListener('input', function () {
    const octal = this.value;
    document.getElementById("input_binario").value = octal_binario(octal);
    document.getElementById("input_decimal").value = octal_decimal(octal);
    document.getElementById("input_hexadecimal").value = octal_hexadecimal(octal);
});

// Pegar valor do hexadecimal e converter para binario, decimal e octal
document.getElementById("input_hexadecimal").addEventListener('input', function () {
    const hexadecimal = this.value;
    document.getElementById("input_binario").value = hexadecimal_binario(hexadecimal);
    document.getElementById("input_decimal").value = hexadecimal_decimal(hexadecimal);
    document.getElementById("input_octal").value = hexadecimal_octal(hexadecimal);
});

// Funções de conversão:
function decimal_binario(decimal) {
    return parseInt(decimal, 10).toString(2);
}

function decimal_octal(decimal) {
    return parseInt(decimal, 10).toString(8);
}

function decimal_hexadecimal(decimal) {
    return parseInt(decimal, 10).toString(16).toUpperCase();
}

function binario_decimal(binario) {
    return parseInt(binario, 2);
}

function binario_octal(binario) {
    const decimal = binario_decimal(binario);
    return decimal_octal(decimal);
}

function binario_hexadecimal(binario) {
    const decimal = binario_decimal(binario);
    return decimal_hexadecimal(decimal);
}

function octal_decimal(octal) {
    return parseInt(octal, 8);
}

function octal_binario(octal) {
    const decimal = octal_decimal(octal);
    return decimal_binario(decimal);
}

function octal_hexadecimal(octal) {
    const decimal = octal_decimal(octal);
    return decimal_hexadecimal(decimal);
}

function hexadecimal_decimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
}

function hexadecimal_binario(hexadecimal) {
    const decimal = hexadecimal_decimal(hexadecimal);
    return decimal_binario(decimal);
}

function hexadecimal_octal(hexadecimal) {
    const decimal = hexadecimal_decimal(hexadecimal);
    return decimal_octal(decimal);
}
