<?php

// include "../include/config.php";

class BDConnection
{
    private $pdo;

    public function connect()
    {        
        try {
            if ($this->pdo == null) {
                $this->pdo = new \PDO("sqlite:" . SQLITE_PATH);
            }
            return $this->pdo;
        } catch (\PDOException $e) {
            echo "ERROR: No se pudo establecer la conexion. $e";
        }
    }

    public function disconnect()
    {
        $this->pdo = null;
    }
 
}
