<div class="page-pdf">

    <div class="centralizar">

        <div id="preview"></div>

        <form method="post" target="__blank">
            <div id="editor">
                <!-- Conteúdo HTML -->
            </div>

            <!-- Campo oculto para o guardar o conteúdo -->
            <input type="hidden" name="conteudo-pdf" id="conteudo">

            <button type="submit" class="btn">Visualizar</button>
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

        quill.on('text-change', function () {
            var conteudo = quill.root.innerHTML;
            document.getElementById('preview').innerHTML = conteudo;
        });

    </script>


</div> <!-- page-pdf -->