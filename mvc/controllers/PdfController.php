<?php

namespace Mvc\controllers;

use Mvc\models\PdfModel;

class PdfController
{
    public function index()
    {
        \Mvc\views\MainView::render('pdf');

        if (isset($_POST['btn-pdf1'])) {
            $conteudo = $_POST['conteudo-pdf'];
            PdfModel::gerarPdf($conteudo);

        } elseif (isset($_POST['btn-pdf2'])) {
            $css = $_POST['css'];
            $html = $_POST['html'];
            PdfModel::gerarPdfComEstilo($css, $html);

        } elseif (isset($_POST['btn-pdf3'])) {
            if (isset($_FILES['arquivo-word'])) {
                $arquivo = $_FILES['arquivo-word']['tmp_name'];
                PdfModel::gerarPdfDoWord($arquivo);
            }
        }
    }
}
