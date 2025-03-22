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
        this.upload_imagens(contador, urlMapping);
        this.arrastar_e_soltar(contador, urlMapping);

    }


    // Upload de imagens com input
    upload_imagens(contador, urlMapping) {
        document.getElementById('upload-img').addEventListener('change', function () {
            const file = this.files[0];
            if (!file || !file.type.startsWith('image/')) return;

            const reader = new FileReader();
            const div_pai = document.querySelector('.grade-imagens');
            const imgId = `img-${contador}`;
            contador++; // Incrementa o contador usando referência

            const cartao = document.createElement('div');
            cartao.classList.add('cartao-imagem');
            cartao.innerHTML = `
            <div class="previa-cartao">
                <img id="${imgId}">
                <div class="sobreposicao-cartao">
                    <div class="ferramentas-cartao">
                        <button class="botao-ferramenta botao-copiar" title="Copiar URL">
                            <i class="bi bi-link-45deg"></i>
                        </button>
                        <button class="botao-ferramenta botao-excluir" title="Excluir">
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
            div_pai.appendChild(cartao);

            // Configurar eventos de cópia e exclusão
            cartao.querySelector('.botao-copiar').onclick = () => {
                navigator.clipboard.writeText(imgId);
                $(cartao).find('.botao-copiar').html('<i class="bi bi-check-circle"></i>').css('background-color', 'green');
                setTimeout(() => {
                    $(cartao).find('.botao-copiar').html('<i class="bi bi-link-45deg"></i>').css('background-color', '');
                }, 2000);
            };

            cartao.querySelector('.botao-excluir').onclick = () => cartao.remove();

            // Carregar imagem e mapear URL
            reader.onload = () => {
                const base64 = reader.result;
                document.getElementById(imgId).src = base64;
                urlMapping[imgId] = base64;
            };
            reader.readAsDataURL(file);
        });
    }

    // Eventos de drag and drop
    arrastar_e_soltar(contador, urlMapping) {
        const area_upload = document.querySelector('.area-upload');

        // Prevenir comportamentos padrão
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evento => {
            area_upload.addEventListener(evento, e => {
                e.preventDefault();
                e.stopPropagation();
            });
        });
        // Efeito visual ao arrastar
        ['dragenter', 'dragover'].forEach(evento => {
            area_upload.addEventListener(evento, () => area_upload.classList.add('highlight'));
        });
        
        ['dragleave', 'drop'].forEach(evento => {
            area_upload.addEventListener(evento, () => area_upload.classList.remove('highlight'));
        });

        // Ao soltar arquivo
        area_upload.addEventListener('drop', e => {
            const files = e.dataTransfer.files;
            const input = document.getElementById('upload-img');

            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    // Atualizar o input e disparar o evento 'change'
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    input.files = dataTransfer.files;
                    const event = new Event('change');
                    input.dispatchEvent(event);
                } else {
                    alert('Por favor, solte apenas arquivos de imagem.');
                }
            }
        });
    }

}