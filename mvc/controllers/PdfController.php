<?php

namespace mvc\controllers;

class PdfController
{
    public function index()
    {
        \mvc\views\MainView::render('pdf');
    }
}