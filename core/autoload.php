<?php

spl_autoload_register(function ($class) {

    if ($class === 'core\App') {
        return require 'core/App.php';
    }

    $class = str_replace('\\', '/', $class);

    $arquivo = $class . '.php';

    if (file_exists($arquivo)) {
        include $arquivo;
    } else {
        $erro = new mvc\controllers\ErroController;
        $erro->index();
        die;
    }

});



/* Gerador de PDF */
if (isset($_GET['url-pdf']) && $_GET['url'] === 'pdf') {
    include 'src/vendor/autoload.php';
    $conteudo = $_GET['conteudo-pdf'];
    $dompdf = new \Dompdf\Dompdf();
    $dompdf->loadHtml($conteudo);
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);
    die;
}