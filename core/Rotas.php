<?php

namespace core;

class Rotas
{

    public function rota_post()
    {
        define('COMPOSER', 'src/vendor/autoload.php');

        // PDF

        if (isset($_POST['conteudo-pdf'])) {
            include COMPOSER;
            $conteudo = $_POST['conteudo-pdf'];
            $dompdf = new \Dompdf\Dompdf();
            $dompdf->loadHtml($conteudo);
            $dompdf->setPaper('A4', 'portrait');
            $dompdf->render();
            $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);
            die;

            // PDF
        } elseif (isset($_POST['btn-pdf2'])) {
            include COMPOSER;
            $css = $_POST['css'];
            $html = $_POST['html'];
            $conteudo = "<style>$css</style>$html";
            $dompdf = new \Dompdf\Dompdf();
            $dompdf->loadHtml($conteudo);
            $dompdf->setPaper('A4', 'portrait');
            $dompdf->render();
            $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);
            die;

        } elseif (isset($_POST['btn-pdf3'])) {
            include COMPOSER;

            if (isset($_FILES['arquivo-word'])) {
                $arquivo = $_FILES['arquivo-word']['tmp_name'];
                if (file_exists($arquivo)) {

                    $arquivo_Word = \PhpOffice\PhpWord\IOFactory::load($arquivo);
                    $word_HTML = \PhpOffice\PhpWord\IOFactory::createWriter($arquivo_Word, 'HTML');
                    ob_start(); // Inicia o buffer de saída
                    $word_HTML->save('php://output'); // Salva o HTML no buffer
                    $htmlContent = ob_get_clean(); // Captura o conteúdo do buffer e limpa

                    $dompdf = new \Dompdf\Dompdf();
                    $dompdf->loadHtml($htmlContent);
                    $dompdf->setPaper('A4', 'portrait');
                    $dompdf->render();
                    $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);

                } else
                    return;

            } else
                return;
        }
    }

}


