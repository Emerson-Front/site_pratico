<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?= $titulo ?> </title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="mvc/views/imagens/icon/<?= $page ?>.ico" type="image/x-icon">
    <?= $link ?>

    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>

</head>

<body>

    <header>
        <div class="centralizar">

            <div class="logo">
                <a href="home">Prático</a>
                <i class="bi bi-list"></i>
            </div>

            <nav class="menu">
                <ul>
                    <li><a href="home">Início</a></li>
                    <li><a href="pdf">Gerador de PDF</a></li>
                    <li><a href="conversor">Conversor de Unidades</a></li>
                    <li><a href="conversor_numerico">Conversor Numérico</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <script src="js/header.js"></script>