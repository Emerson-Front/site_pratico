<?php

namespace Core;

class App
{
    public function executar()
    {

        $url = isset($_GET['url']) ? $_GET['url'] : 'home';

        $class = 'Mvc\controllers\\' . ucfirst($url) . 'Controller';

        $arquivo = str_replace('\\', '/', lcfirst($class) . '.php');

        
        if (!file_exists($arquivo)) {
            header('Location: erro');
            die;
        }

        $controller = new $class;
        $controller->index();

    }
}