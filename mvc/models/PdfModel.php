<?php

namespace Mvc\models;

use Dompdf\Dompdf;
use PhpOffice\PhpWord\IOFactory;

class PdfModel
{
    public static function gerarPdf($conteudo)
    {
        $dompdf = new Dompdf();
        $dompdf->loadHtml($conteudo);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();
        $dompdf->stream('meu_documento.pdf', ['Attachment' => 0]);
    }

    public static function gerarPdfComEstilo($css, $html)
    {
        $conteudo = "<style>$css</style>$html";
        self::gerarPdf($conteudo);
    }

    public static function gerarPdfDoWord($arquivo)
    {
        if (file_exists($arquivo)) {
            $arquivo_Word = IOFactory::load($arquivo);
            $word_HTML = IOFactory::createWriter($arquivo_Word, 'HTML');
            ob_start();
            $word_HTML->save('php://output');
            $htmlContent = ob_get_clean();

            self::gerarPdf($htmlContent);
        }
    }
}
