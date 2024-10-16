<?php

namespace core;

class App
{
    public function executar()
    {
        $url = isset($_GET['url']) ? $_GET['url'] : 'home';

        $class = 'mvc\controllers\\' . ucfirst($url) . 'Controller';

        $controller = new $class;
        $controller->index();

    }
}