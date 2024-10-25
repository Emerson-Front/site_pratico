<?php
$placeholder_Css = "h1{
color: red;
text-align: center;
}";
$placeholder_Html = "<h1>Olá Mundo!</h1>";
?>

<div class="page-pdf">

    <div class="centralizar">

        <div class="mode-switch">
            <h4>Modo HTML | CSS</h4>
            <div class="form-check form-switch">
                <input style="cursor: pointer" class="form-check-input" type="checkbox" role="switch"
                    id="flexSwitchCheckDefault">
            </div>
        </div>

        <div style="display: none" id="file">

            <p>Tem um modelo HTML pronto?</p>
            <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02">
                <label class="input-group-text" for="inputGroupFile02">Adicione arquivo HTML</label>
                <pre id="fileContent"></pre>
            </div>

        </div>

        <div class="pdf-edit">
            <iframe id="preview"></iframe>

            <form method="post" target="__blank">

                <div id="editor">
                    <!-- Conteúdo-->
                </div>
                <!-- Campo oculto para o guardar o conteúdo -->
                <input type="hidden" name="conteudo-pdf" id="conteudo">
                <button type="submit" class="btn-pdf1">Visualizar</button>
            </form>

            <!-- Modo HTML -->
            <div style="display: none" class="modo-html">
                <form class="mode" method="post" target="__blank">

                    <p id="css">Código CSS</p>
                    <textarea class="codigo-css" name="css" placeholder=" <?= $placeholder_Css ?> "></textarea>

                    <p id="html">Código HTML</p>
                    <textarea class="codigo-html" name="html" placeholder=" <?= $placeholder_Html ?> "></textarea>

                    <button type="submit" class="btn-pdf2" name="btn-pdf2">Visualizar</button>
                </form>
            </div>

        </div>

    </div>
</div> <!-- page-pdf -->

<script src="js/page-pdf.js"></script>