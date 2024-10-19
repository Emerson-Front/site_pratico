<div class="page-pdf">


    <?= mvc\views\MainView::obra() ?>


    <div class="centralizar">
        <form method="get" target="__blank">
            <div id="editor">
                <!-- Conteúdo HTML -->
            </div>

            <!-- Campo oculto para o guardar o conteúdo -->
            <input type="hidden" name="conteudo-pdf" id="conteudo">

            <button type="submit" name="url-pdf" value="pdf">Visualizar</button>
        </form>
    </div>

    <!-- Inicia o Quill editor -->
    <script>
        const quill = new Quill('#editor', {
            theme: 'snow'
        });

        // Antes de enviar o formulário, transferir o conteúdo do editor para o input oculto
        document.querySelector('form').onsubmit = function () {
            document.querySelector('#conteudo').value = quill.root.innerHTML;
        };
    </script>


</div> <!-- page-pdf -->
