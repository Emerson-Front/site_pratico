import MainView from "../view/mainView.js";
import PdfModel from "../model/pdfModel.js";

export default class pdfController {

    async index() {

        const mainView = new MainView();
        await mainView.render();


        // Eventos de deslize da aba css e html
        $("#css").on("click", function () {
            $('.codigo-css').toggle(300);
        });
        $("#html").on("click", function () {
            $('.codigo-html').toggle(300);
        });

        // Placeholder para o editor css
        $(".codigo-css").attr("placeholder", "h1{\n    color: red;\n    text-align: center;\n}");


        // Atualizar o preview
        $('.codigo-css, .codigo-html').on('input', function () {
            const css = "<style>" + $('.codigo-css').val() + "</style>";
            let html = $('.codigo-html').val();

            const container = $('<div>').html(html);
            const imgs = container.find('img');

            const pdfModel = new PdfModel();
            pdfModel.verificaImagem(imgs, urlMapping); // Garanta que urlMapping está definido!

            html = container.html();

            const iframe = $('#preview')[0];
            let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(css + html);
            iframeDoc.close();
        });


        // Botão para gerar o PDF
        $('.btn-pdf').on('click', function () {
            const css = "<style>" + $('.codigo-css').val() + "</style>";
            let html = $('.codigo-html').val();

            const container = $('<div>').html(html);
            const imgs = container.find('img');

            const pdfModel = new PdfModel();
            pdfModel.verificaImagem(imgs, urlMapping); // Garanta que urlMapping está definido!

            html = container.html();
            pdfModel.gerarPdf(css, html);
        });


        // Upload de imagens
        let contador = 0;
        let urlMapping = {};
        document.getElementById('upload-img').addEventListener('change', function () {
            let file = this.files[0];
            let reader = new FileReader();

            const div_pai = document.querySelector('.grade-imagens');
            let imgId = `img-${contador}`;
            contador++;

            let cartao = document.createElement('div');
            cartao.classList.add('cartao-imagem');
            cartao.innerHTML = `
                    <div class="previa-cartao">
                        <img id="${imgId}">
                        <div class="sobreposicao-cartao">
                            <div class="ferramentas-cartao">
                                <button class="botao-ferramenta botao-copiar" title="Copiar URL">
                                    <i class="bi bi-link-45deg"></i>
                                </button>
                                <button class="botao-ferramenta botao-excluir" title="Excluir" onclick="remover_img(this)">
                                    <i class="bi bi-trash3"></i>
                                </button>
                            </div>
                        </div>
                    </div>
            `;
            div_pai.appendChild(cartao);

            // Função para copiar a URL da imagem
            cartao.querySelector('.botao-copiar').onclick = function () {
                navigator.clipboard.writeText();
            }

            // Função para carregar a imagem e a aicionar base64 e urlMapping
            reader.onload = function () {
                let base64 = reader.result;
                document.getElementById(imgId).src = base64;
                urlMapping[imgId] = base64;
            };


            // Função para remover o cartão
            cartao.querySelector('.botao-excluir').onclick = function () {
                cartao.remove();
            }


            // Função para copiar a "URL" da imagem que é o id da imagem no dicionario urlMapping
            cartao.querySelector('.botao-copiar').onclick = function () {
                let id = imgId;
                navigator.clipboard.writeText(id);

                // Estilo do botão quando copia a "URL"
                $('.botao-copiar').html('<i class="bi bi-check-circle"></i>').css('background-color', 'green');
                setTimeout(() => {
                    $('.botao-copiar').html('<i class="bi bi-link-45deg"></i>').css('background-color', '');
                }, 2000);
            }

            reader.readAsDataURL(file);

        });

    }

}