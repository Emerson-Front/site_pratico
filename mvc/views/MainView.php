<?php

namespace mvc\views;

class MainView
{

    public static function render($page)
    {
        define('HEADER', 'templates/header.php');
        define('PAGE', 'pages/' . ucfirst($page) . 'View.php');
        define('FOOTER', 'templates/footer.php');

        $titulo = self::gerar_titulo($page);

        require HEADER;
        require PAGE;
        require FOOTER;



    }

    public static function gerar_titulo($page)
    {
        switch ($page) {
            case 'pdf':
                return 'Gerador de PDF';
            default:
                return 'Prático';
        }

    }

}