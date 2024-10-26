// Inicializa o Quill Editor na div com o ID 'editor' e aplica o tema 'snow'
const quill = new Quill('#editor', {
    theme: 'snow' // Tema visual do editor
});

// Adiciona um manipulador de eventos para o envio do formulário
document.querySelector('form').onsubmit = function () {
    // Antes de enviar o formulário, transferir o conteúdo do editor para um input oculto
    // O conteúdo é obtido a partir do HTML interno do editor Quill
    document.querySelector('#conteudo').value = quill.root.innerHTML;

};

// Adiciona um ouvinte de evento para detectar mudanças no texto do editor
quill.on('text-change', function () {
    // Quando o texto muda, obtém o HTML atual do editor
    var conteudo = quill.root.innerHTML;
    var iframe = $('#preview')[0];
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(conteudo);
    iframeDoc.close();
});


/* Modo HTML -->*/
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

// Eventos de input para HTML e CSS
$('.codigo-css, .codigo-html').on('input', function () {
    var css = "<style>" + $('.codigo-css').val() + "</style>";
    var html = $('.codigo-html').val();
    // Referencia o iframe e acessa o documento interno
    var iframe = $('#preview')[0];
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(css + html);
    iframeDoc.close();
    //$('#preview').html(css + html);
});

// Ajusta da autura do textarea
$(document).ready(function () {
    $('.codigo-css, .codigo-html').on('input', function () {
        this.style.height = '300'; // Reseta a altura primeiro
        this.style.height = (this.scrollHeight) + 'px'; // Ajusta para a altura do conteúdo
    });
});
/* <-- Modo HTML */
