<?php

namespace Mvc\views;

class MainView
{

    public static function render($page)
    {

        define('HEADER', 'templates/header.php');
        define('PAGE', 'pages/' . ucfirst($page) . 'View.php');
        define('FOOTER', 'templates/footer.php');

        $titulo = ucwords(str_replace(['_', '-'], ' ', $page));
        $link = self::biblioteca($page);

        /**
         * Verifica se a página atual é 'pdf' e se o botão para gerar o PDF foi pressionado.
         * Nesse caso, evita a inclusão dos arquivos definidos acima para prevenir o erro
         * "headers already sent", que pode ocorrer devido a qualquer saída enviada ao navegador
         * antes da geração do PDF.
         */
        if ($page === 'pdf' && (isset($_POST['btn-pdf1']) || isset($_POST['btn-pdf2']) || isset($_POST['btn-pdf3']))) {
            return;
        }

        require HEADER;
        require PAGE;
        require FOOTER;


    }

    public static function biblioteca($page)
    {
        # Biblioteca QUILL
        define('QUILL_STYLE', '<link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet" />');
        define('QUILL_BIBLIOTECA', '<script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js"></script>');
        define('QUILL', QUILL_STYLE . QUILL_BIBLIOTECA);

        switch ($page) {
            case 'pdf':
                return QUILL;

            default:
                return;
        }

    }

    static function obra()
    {

        ?>
        <style>
            .obra {
                margin-bottom: 50px;
            }

            .obra h1 {
                display: flex;
                justify-content: center;
                font-weight: 300;
            }

            .obra .gear {
                margin-left: 10px;
                border-radius: 50%;
                animation: rodar 2.5s linear infinite;
            }

            @keyframes rodar {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
        </style>

        <div class="obra">
            <h1>Página em obra!
                <div class="gear"><i class="bi bi-gear-wide"></i></div>

            </h1>
            <div class="striped"></div>
        </div>
        <?php

    }

}