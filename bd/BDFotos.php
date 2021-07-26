<?php

class BDFotos
{

    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function getFotos()
    {
        $stmt = $this->pdo->query('SELECT * FROM foto');

        $fotos = [];
        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $fotos[] = [
                'idFoto' => $row['idFoto'],
                'foto' => $row['foto'],
                'idAnuncio' => $row['idAnuncio'],                
            ];
        }     

        return $fotos;
    }
}