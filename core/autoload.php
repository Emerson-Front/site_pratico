<?php

spl_autoload_register(function ($class) {

    if ($class === 'core\App') {
        return require 'core/App.php';
    }

    $arquivo = $class . '.php';

    if (file_exists($arquivo)) {
        include $arquivo;
    } else {
        $erro = new mvc\controllers\ErroController;
        $erro->index();
        die;
    }

});