<?php

namespace mvc\controllers;

class PdfController
{
    public function index()
    {
        \mvc\views\MainView::render('pdf');
    }
    /**
     * Controlador de PDF
     *
     * Devido a conflitos com o autoload próprio e o autoload do Composer, 
     * as funções relacionadas a essas bibliotecas foram separadas em um arquivo distinto.
     *
     * Bibliotecas utilizadas:
     * - Dompdf: para a geração de PDFs.
     * - PHPWord: para a conversão de documentos Word.
     *
     * Localização do arquivo: 'core/Rotas.php'
     */


}