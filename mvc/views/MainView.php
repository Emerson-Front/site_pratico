<?php

namespace mvc\views;

class MainView
{
    public static function render($page)
    {
        define('HEADER', 'templates/header.php');
        define('PAGE', 'pages/' . ucfirst($page) . 'View.php');
        define('FOOTER', 'templates/footer.php');

        require HEADER;
        require PAGE;
        require FOOTER;

    }
}