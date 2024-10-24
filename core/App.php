<?php

namespace core;

class App
{
    public function executar()
    {
        $rota = new \core\Rotas();
        $rota->rota_post();


        $url = isset($_GET['url']) ? $_GET['url'] : 'home';

        $class = 'mvc\controllers\\' . ucfirst($url) . 'Controller';

        $controller = new $class;
        $controller->index();



    }
}