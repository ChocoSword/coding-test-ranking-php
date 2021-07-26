<?php

class BDAnuncio
{

    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function getAllAnuncios()
    {
        $stmt = $this->pdo->query('SELECT * FROM anuncio');

        $anuncio = [];
        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $anuncio[] = [
                'idAnuncio' => $row['idAnuncio'],
                'titulo' => $row['titulo'],
                'precio' => $row['precio'], 
                'infoCorta' => $row['infoCorta'],
                'infoDetalle' => $row['infoDetalle'],
                'telefono' => $row['telefono']
            ];
        }     

        return $anuncio;
    }
}
