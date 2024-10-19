<?php

namespace core;

class Rotas
{

    public function rota_GET()
    {
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

    }

}

