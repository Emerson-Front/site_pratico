<?php

namespace core;

class Rotas
{

    public function rota_post()
    {
        // PDF
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (isset($_POST['conteudo-pdf'])) {
                include 'src/vendor/autoload.php';
                $conteudo = $_POST['conteudo-pdf'];
                $dompdf = new \Dompdf\Dompdf();
                $dompdf->loadHtml($conteudo);
                $dompdf->setPaper('A4', 'portrait');
                $dompdf->render();
                $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);
                die;

                // PDF
            } elseif (isset($_POST['btn-pdf2'])) {
                include 'src/vendor/autoload.php';
                $css = $_POST['css'];
                $html = $_POST['html'];
                $conteudo = "<style>$css</style>$html";
                $dompdf = new \Dompdf\Dompdf();
                $dompdf->loadHtml($conteudo);
                $dompdf->setPaper('A4', 'portrait');
                $dompdf->render();
                $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);
                die;
            }
        }

    }

}
