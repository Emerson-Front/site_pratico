<?php

namespace mvc\controllers;

class PdfController
{
    public function index()
    {
        \mvc\views\MainView::render('pdf');

    }

    /**
     * O gerador de PDF (Dompdf) está no autoload ('core/autoload.php')
     */
}