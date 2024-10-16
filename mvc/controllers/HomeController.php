<?php

namespace mvc\controllers;

class HomeController
{
    public function index()
    {
        \mvc\views\MainView::render('home');
    }
}