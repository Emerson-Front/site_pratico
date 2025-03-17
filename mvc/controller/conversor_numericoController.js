import MainView from '../view/mainView.js';
import Conversor_numericoModel from '../model/conversor_numericoModel.js';

export default class Conversor_numericoController {
    async index() {

        const mainView = new MainView();
        await mainView.render();


        // Pegar valor do decimal e converter para binario, octal e hexadecimal
        document.getElementById("input_decimal").addEventListener('input', function () {

            const decimal = this.value;

            if (!/^\d*$/.test(decimal)) {
                $("span.decimal").css("display", "block");
            } else {
                $("span.erro").css("display", "none");
            }

            const binario = new Conversor_numericoModel().decimal_binario(decimal);
            const octal = new Conversor_numericoModel().decimal_octal(decimal);
            const hexadecimal = new Conversor_numericoModel().decimal_hexadecimal(decimal);

            document.getElementById("input_binario").value = binario;
            document.getElementById("input_octal").value = octal;
            document.getElementById("input_hexadecimal").value = hexadecimal;

        });

        // Pegar valor do binario e converter para decimal, octal e hexadecimal
        document.getElementById("input_binario").addEventListener('input', function () {

            const binario = this.value;

            if (!/^[01]*$/.test(binario)) {
                $("span.binario").css("display", "block");
            } else {
                $("span.erro").css("display", "none");
            }

            const decimal = new Conversor_numericoModel().binario_decimal(binario);
            const octal = new Conversor_numericoModel().binario_octal(binario);
            const hexadecimal = new Conversor_numericoModel().binario_hexadecimal(binario);

            document.getElementById("input_decimal").value = decimal;
            document.getElementById("input_octal").value = octal;
            document.getElementById("input_hexadecimal").value = hexadecimal;


        });

        // Pegar valor do octal e converter para binario, decimal e hexadecimal
        document.getElementById("input_octal").addEventListener('input', function () {

            const octal = this.value;

            if (!/^[0-7]*$/.test(octal)) {
                $("span.octal").css("display", "block");
            } else {
                $("span.erro").css("display", "none");
            }

            const decimal = new Conversor_numericoModel().octal_decimal(octal);
            const binario = new Conversor_numericoModel().octal_binario(octal);
            const hexadecimal = new Conversor_numericoModel().octal_hexadecimal(octal);

            document.getElementById("input_decimal").value = decimal;
            document.getElementById("input_binario").value = binario;
            document.getElementById("input_hexadecimal").value = hexadecimal;

        });

        // Pegar valor do hexadecimal e converter para binario, decimal e octal
        document.getElementById("input_hexadecimal").addEventListener('input', function () {

            const hexadecimal = this.value = this.value.toUpperCase();

            if (!/^[0-9a-fA-F]*$/.test(hexadecimal)) {
                $("span.hexadecimal").css("display", "block");
            } else {
                $("span.erro").css("display", "none");
            }

            const decimal = new Conversor_numericoModel().hexadecimal_decimal(hexadecimal);
            const binario = new Conversor_numericoModel().hexadecimal_binario(hexadecimal);
            const octal = new Conversor_numericoModel().hexadecimal_octal(hexadecimal);

            document.getElementById("input_decimal").value = decimal;
            document.getElementById("input_binario").value = binario;
            document.getElementById("input_octal").value = octal;

        });



        // De binario para texto
        document.getElementById("input_texto_binario").addEventListener('input', function () {

            const binario = this.value;

            if (!/^[01\s]*$/.test(binario)) {
                $("span.textarea-binario").css("display", "block");
            } else {
                $("span.erro").css("display", "none");
            }

            const texto = new Conversor_numericoModel().traduzir_binario_para_texto(binario);

            document.getElementById("input_texto").value = texto;


        });

        // De texto para binario
        document.getElementById("input_texto").addEventListener('input', function () {

            const texto = this.value;

            const binario = new Conversor_numericoModel().traduzir_texto_para_binario(texto);

            document.getElementById("input_texto_binario").value = binario;

        });

    }

}