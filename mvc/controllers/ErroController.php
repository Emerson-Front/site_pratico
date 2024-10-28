<?php

namespace Mvc\controllers;

class ErroController
{
    public function index()
    {
        \Mvc\views\MainView::render('erro');
    }
}