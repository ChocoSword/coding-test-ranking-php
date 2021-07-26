<?php

// include "./include/config.php";
// include "./bd/BDConnection.php";
// include "./bd/BDAnuncio.php";

// $bd = (new BDConnection())->connect();
// $anuncio = (new BDAnuncio($bd))->getAllAnuncios();

// var_dump($anuncio);



?>

<!DOCTYPE html>
<html lang="es">

<head>
    <!-- meta -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="currentpage" content="index">

    <!-- css -->
    <link rel="stylesheet" href="./recursos/css/bootstrap.min.css">
    <link rel="stylesheet" href="./recursos/css/main.css">

</head>

<body>

    <div class="container">

        <div id="navbar" class="row">
            <div class="col-12">
                <nav class="navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <h1>Prueba Rentger</h1>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div id="contenidoDinamico" class="row"> </div>
        
    </div>
</body>

<footer>

</footer>

<script src="./recursos/js/jquery-3.5.1.min.js"></script>
<script src="./recursos/js/bootstrap.bundle.min.js"></script>
<script src="./index.js"></script>

</html>