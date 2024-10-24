<?php

namespace mvc\controllers;

class PdfController
{
    public function index()
    {
        \mvc\views\MainView::render('pdf');
    }

    /**
     * O gerador de PDF (Dompdf) está em rotas_post ('core/Rotas.php')
     */
}