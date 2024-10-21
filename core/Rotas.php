<?php

namespace core;

class Rotas
{

    public function rota_post()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            include 'src/vendor/autoload.php';
            $conteudo = $_POST['conteudo-pdf'];
            $dompdf = new \Dompdf\Dompdf();
            $dompdf->loadHtml($conteudo);
            $dompdf->setPaper('A4', 'portrait');
            $dompdf->render();
            $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);
            die;
        }

    }

}

