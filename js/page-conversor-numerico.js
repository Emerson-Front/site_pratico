// Pegar valor do decimal e converter para binario, octal e hexadecimal
document.getElementById("input_decimal").addEventListener('input', function () {
    const decimal = this.value;
    // Regra de entrada:
    // 1. O valor decimal deve ser um número inteiro
    if (!/^\d*$/.test(decimal)) {
        $("span.decimal").css("display", "block");
    } else {
        $("span.erro").css("display", "none");
        document.getElementById("input_binario").value = decimal_binario(decimal);
        document.getElementById("input_octal").value = decimal_octal(decimal);
        document.getElementById("input_hexadecimal").value = decimal_hexadecimal(decimal);
    }
});

// Pegar valor do binario e converter para decimal, octal e hexadecimal
document.getElementById("input_binario").addEventListener('input', function () {
    const binario = this.value;
    // Regra de entrada:
    // 1. O valor binário deve ser uma sequência de 0 e 1s
    if (!/^[01]*$/.test(binario)) {
        $("span.binario").css("display", "block");
    } else {
        $("span.erro").css("display", "none");
        document.getElementById("input_decimal").value = binario_decimal(binario);
        document.getElementById("input_octal").value = binario_octal(binario);
        document.getElementById("input_hexadecimal").value = binario_hexadecimal(binario);
    }
});

// Pegar valor do octal e converter para binario, decimal e hexadecimal
document.getElementById("input_octal").addEventListener('input', function () {
    const octal = this.value;
    // Regra de entrada:
    // 1. O valor octal deve ser uma sequência de 0 a 7
    if (!/^[0-7]*$/.test(octal)) {
        $("span.octal").css("display", "block");
    } else {
        $("span.erro").css("display", "none");
        document.getElementById("input_binario").value = octal_binario(octal);
        document.getElementById("input_decimal").value = octal_decimal(octal);
        document.getElementById("input_hexadecimal").value = octal_hexadecimal(octal);
    }
});

// Pegar valor do hexadecimal e converter para binario, decimal e octal
document.getElementById("input_hexadecimal").addEventListener('input', function () {
    const hexadecimal = this.value;
    // Regra de entrada:
    // 1. O valor hexadecimal deve conter apenas dígitos de 0 a 9 e letras de A a F (maiúsculas ou minúsculas)
    if (!/^[0-9a-fA-F]*$/.test(hexadecimal)) {
        $("span.hexadecimal").css("display", "block");
    } else {
        $("span.erro").css("display", "none");
        document.getElementById("input_binario").value = hexadecimal_binario(hexadecimal);
        document.getElementById("input_decimal").value = hexadecimal_decimal(hexadecimal);
        document.getElementById("input_octal").value = hexadecimal_octal(hexadecimal);
    }
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



// De binario para texto e de texto para binario

document.getElementById("input_texto_binario").addEventListener('input', function () {
    const texto_binario = this.value;
    // Regra de entrada:
    // 1. O valor binário deve ser uma sequência de 0 e 1s
    if (!/^[01\s]*$/.test(texto_binario)) {
        $("span.textarea-binario").css("display", "block");
    } else {
        $("span.erro").css("display", "none");
        document.getElementById("input_texto").value = traduzir_binario_para_texto(texto_binario);
    }
});

// Função de tradução de texto em binário:

document.getElementById("input_texto").addEventListener('input', function () {
    $("span.erro").css("display", "none");
    const texto = this.value;
    document.getElementById("input_texto_binario").value = traduzir_texto_para_binario(texto);
});



function traduzir_binario_para_texto(binario) {
    // 1. Separar a string binária em um array de números binários
    texto = binario.split(' ');
    // 2. Mapear cada número binário para o caractere correspondente
    texto = texto.map(function (binario) {
        return String.fromCharCode(parseInt(binario, 2));
    });
    // 3. Juntar os caracteres em uma única string
    return texto.join('');
}

function traduzir_texto_para_binario(texto) {
    // 1. Separar o texto em um array de caracteres
    binario = texto.split('');
    // 2. Mapear cada caractere para o número binário correspondente
    binario = binario.map(function (caractere) {
        return caractere.charCodeAt(0).toString(2);
    });
    // 3. Juntar os números binários em uma única string
    return binario.join(' ');
}



// style
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBorderColor() {
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    let color3 = getRandomColor();
    let color4 = getRandomColor();
    let deg = Math.floor(Math.random() * 361);
    let element = document.querySelector(".content-wrapper");


    element.style.transition = "0.7s";
    element.style.boxShadow = `
    0 -15px 10px ${color1},       /* Sombra superior */
    15px 0 10px ${color2},        /* Sombra direita */
    0 15px 10px ${color3},        /* Sombra inferior */
    -15px 0 10px ${color4}        /* Sombra esquerda */
`;
    element.style.borderImageSource = `linear-gradient(${deg}deg, ${color1}, ${color2}, ${color3}, ${color4})`;

}

setInterval(changeBorderColor, 3000);