<?php

namespace Mvc\controllers;

class ConversorController
{

    public function index()
    {
        \Mvc\views\MainView::render('conversor');
    }

}