<?php

namespace mvc\controllers;

class ErroController
{
    public function index()
    {
        \mvc\views\MainView::render('erro');
    }
}