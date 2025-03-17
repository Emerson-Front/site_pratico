import MainView from "../view/mainView.js";
import PdfModel from "../model/pdfModel.js";

export default class pdfController {

    async index() {

        const mainView = new MainView();
        await mainView.render();


        // Botão para alterar o modo para HTML
        $('#flexSwitchCheckDefault').change(function () {
            if ($(this).is(':checked')) {
                $('.ql-toolbar, #editor, .btn-pdf1').css('display', 'none');
                $('.modo-html').css('display', 'block');

            } else {
                $('.ql-toolbar, #editor').css('display', 'block');
                $('.btn-pdf1').css('display', 'inline-block');
                $('.modo-html').css('display', 'none');
            }
        });


        // Eventos de deslize da aba css e html
        $("#css").on("click", function () {
            $('.codigo-css').toggle(300);
        });
        $("#html").on("click", function () {
            $('.codigo-html').toggle(300);
        });

        // Placeholder para o css
        $(".codigo-css").attr("placeholder", "h1{\n    color: red;\n    text-align: center;\n}");



        // Eventos de input para HTML e CSS
        $('.codigo-css, .codigo-html').on('input', function () {
            const css = "<style>" + $('.codigo-css').val() + "</style>";
            const html = $('.codigo-html').val();
            const preview = new PdfModel();
            preview.preview(css, html);
        });


        // Botão para gerar o PDF
        $('.btn-pdf2').on('click', function () {

            const css = "<style>" + $('.codigo-css').val() + "</style>";
            const html = $('.codigo-html').val();

            const pdf = new PdfModel();
            pdf.gerarPdf(css, html);

        });



    }

}