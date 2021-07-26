<?php

include "../include/config.php";
include "../bd/BDConnection.php";
include "../bd/BDAnuncio.php";
include "../bd/BDFotos.php";

if ($_POST['accion'] == 'cargaAnuncios') {
    header('Content-Type: application/json');
    $bd = (new BDConnection())->connect();
    $anuncio = (new BDAnuncio($bd))->getAllAnuncios();
    $fotos = (new BDFotos($bd))->getFotos();

    $result = [
        'anuncio' => $anuncio,
        'fotos' => $fotos,
    ];

    // cerramos conexion
    unset($bd);
    echo  json_encode($result);
    exit;
}
