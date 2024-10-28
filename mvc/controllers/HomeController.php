<?php

namespace Mvc\controllers;

class HomeController
{
    public function index()
    {
        \Mvc\views\MainView::render('home');
    }
}