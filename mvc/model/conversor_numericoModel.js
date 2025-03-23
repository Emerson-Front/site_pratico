export default class Conversor_numericoModel {


    // Funções de conversão decimal:

    decimal_binario(decimal) {
        return parseInt(decimal, 10).toString(2);
    }

    decimal_octal(decimal) {
        return parseInt(decimal, 10).toString(8);
    }

    decimal_hexadecimal(decimal) {
        return parseInt(decimal, 10).toString(16).toUpperCase();
    }



    // Funções de conversão binario:

    binario_decimal(binario) {
        return parseInt(binario, 2);
    }

    binario_octal(binario) {
        const decimal = this.binario_decimal(binario);
        return this.decimal_octal(decimal);
    }

    binario_hexadecimal(binario) {
        const decimal = this.binario_decimal(binario);
        return this.decimal_hexadecimal(decimal);
    }



    // Funções de conversão octal:

    octal_decimal(octal) {
        return parseInt(octal, 8);
    }

    octal_binario(octal) {
        const decimal = this.octal_decimal(octal);
        return this.decimal_binario(decimal);
    }

    octal_hexadecimal(octal) {
        const decimal = this.octal_decimal(octal);
        return this.decimal_hexadecimal(decimal);
    }



    // Funções de conversão hexadecimal:

    hexadecimal_decimal(hexadecimal) {
        return parseInt(hexadecimal, 16);
    }

    hexadecimal_binario(hexadecimal) {
        const decimal = this.hexadecimal_decimal(hexadecimal);
        return this.decimal_binario(decimal);
    }

    hexadecimal_octal(hexadecimal) {
        const decimal = this.hexadecimal_decimal(hexadecimal);
        return this.decimal_octal(decimal);
    }



    // Função de tradução de binário para texto
    traduzir_binario_para_texto(binario) {
        let texto = binario.split(' ');
        texto = texto.map(function (binario) {
            return String.fromCharCode(parseInt(binario, 2));
        });
        return texto.join('');
    }


    // Função de tradução de texto para binário
    traduzir_texto_para_binario(texto) {

        let binario = texto.split('');
        binario = binario.map(function (caractere) {
            return caractere.charCodeAt(0).toString(2);
        });
        return binario.join(' ');
    }

}