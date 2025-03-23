import MainView from "../view/mainView.js";
import PdfModel from "../model/pdfModel.js";

export default class pdfController {
    constructor() {
        this.contador = 0;
        this.urlMapping = {};
        this.pdfModel = new PdfModel();
    }

    async index() {
        const mainView = new MainView();
        await mainView.render();

        this.inicializarUploadImagens();
        this.inicializarDragAndDrop();
        this.inicializarEditor();
    }

    inicializarEditor() {
        // Configuração inicial
        $(".codigo-css").attr("placeholder", "h1{\n    color: red;\n    text-align: center;\n}");

        // Elementos do DOM
        const elementos = {
            abas: document.querySelectorAll('.aba'),
            camposCodigo: document.querySelectorAll('.campo-codigo'),
            codigoHtml: document.querySelector('.codigo-html'),
            codigoCss: document.querySelector('.codigo-css'),
            codigoCompleto: document.querySelector('.codigo-completo')
        };

        // Funções auxiliares
        const atualizarPrevia = (html, css) => {
            const container = $('<div>').html(html);
            const imgs = container.find('img');
            this.pdfModel.verificaImagem(imgs, this.urlMapping);
            html = container.html();

            const iframe = $('#preview')[0];
            let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(css + html);
            iframeDoc.close();
        };

        const atualizarCodigoCompleto = () => {
            const html = elementos.codigoHtml.value;
            const css = elementos.codigoCss.value;
            elementos.codigoCompleto.value = `<style>\n${css}\n</style>\n\n${html}`;
            atualizarPrevia(html, "<style>" + css + "</style>");
        };

        // Event Listeners
        this.configurarAbas(elementos, atualizarCodigoCompleto);
        this.configurarInputs(elementos, atualizarCodigoCompleto, atualizarPrevia);
        this.configurarBotaoPDF(elementos);
    }

    configurarAbas(elementos, atualizarCodigoCompleto) {
        elementos.abas.forEach(aba => {
            aba.addEventListener('click', () => {
                elementos.abas.forEach(a => a.classList.remove('ativa'));
                elementos.camposCodigo.forEach(campo => campo.classList.remove('ativo'));

                aba.classList.add('ativa');
                const campoId = `editor-${aba.id}`;
                document.getElementById(campoId).classList.add('ativo');

                if (aba.id === 'completo') {
                    atualizarCodigoCompleto();
                }
            });
        });
    }

    configurarInputs(elementos, atualizarCodigoCompleto, atualizarPrevia) {
        elementos.codigoHtml.addEventListener('input', atualizarCodigoCompleto);
        elementos.codigoCss.addEventListener('input', atualizarCodigoCompleto);

        elementos.codigoCompleto.addEventListener('input', () => {
            const codigo = elementos.codigoCompleto.value;
            const styleMatch = codigo.match(/<style>([\s\S]*?)<\/style>/);
            const htmlMatch = codigo.split(/<\/style>/)[1];

            if (styleMatch) {
                elementos.codigoCss.value = styleMatch[1].trim();
            }

            if (htmlMatch) {
                elementos.codigoHtml.value = htmlMatch.trim();
            }

            atualizarPrevia(htmlMatch.trim(), "<style>" + (styleMatch ? styleMatch[1].trim() : "") + "</style>");
        });
    }

    configurarBotaoPDF(elementos) {
        $('.btn-pdf').on('click', () => {
            const css = "<style>" + elementos.codigoCss.value + "</style>";
            let html = elementos.codigoHtml.value;

            const container = $('<div>').html(html);
            const imgs = container.find('img');
            this.pdfModel.verificaImagem(imgs, this.urlMapping);
            html = container.html();

            this.pdfModel.gerarPdf(css, html);
        });
    }

    inicializarUploadImagens() {
        document.getElementById('upload-img').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file || !file.type.startsWith('image/')) return;

            this.criarCartaoImagem(file);
        });
    }

    criarCartaoImagem(file) {
        const reader = new FileReader();
        const div_pai = document.querySelector('.grade-imagens');
        const imgId = `img-${this.contador}`;
        this.contador++;

        const cartao = document.createElement('div');
        cartao.classList.add('cartao-imagem');
        cartao.innerHTML = this.getTemplateCartaoImagem(imgId);
        div_pai.appendChild(cartao);

        this.configurarBotoesCartao(cartao, imgId);
        this.carregarImagem(reader, file, imgId);
    }

    getTemplateCartaoImagem(imgId) {
        return `
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
    }

    configurarBotoesCartao(cartao, imgId) {
        cartao.querySelector('.botao-copiar').onclick = () => {
            navigator.clipboard.writeText(imgId);
            $(cartao).find('.botao-copiar')
                .html('<i class="bi bi-check-circle"></i>')
                .css('background-color', 'green');

            setTimeout(() => {
                $(cartao).find('.botao-copiar')
                    .html('<i class="bi bi-link-45deg"></i>')
                    .css('background-color', '');
            }, 2000);
        };

        cartao.querySelector('.botao-excluir').onclick = () => cartao.remove();
    }

    carregarImagem(reader, file, imgId) {
        reader.onload = () => {
            const base64 = reader.result;
            document.getElementById(imgId).src = base64;
            this.urlMapping[imgId] = base64;
        };
        reader.readAsDataURL(file);
    }

    inicializarDragAndDrop() {
        const area_upload = document.querySelector('.area-upload');

        // Prevenir comportamentos padrão
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evento => {
            area_upload.addEventListener(evento, e => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        // Efeitos visuais
        ['dragenter', 'dragover'].forEach(evento => {
            area_upload.addEventListener(evento, () => area_upload.classList.add('highlight'));
        });

        ['dragleave', 'drop'].forEach(evento => {
            area_upload.addEventListener(evento, () => area_upload.classList.remove('highlight'));
        });

        // Manipulação do drop
        area_upload.addEventListener('drop', e => {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    const input = document.getElementById('upload-img');
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    input.files = dataTransfer.files;
                    input.dispatchEvent(new Event('change'));
                } else {
                    alert('Por favor, solte apenas arquivos de imagem.');
                }
            }
        });
    }

}