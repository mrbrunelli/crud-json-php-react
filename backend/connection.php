<?php

try {
    $pdo = new PDO("mysql:dbname=crud-react;host=localhost", "root", "");
} catch (PDOException $err) {
    $msg = $erro->getMessage();
    echo "<p>Erro ao conectar no banco de dados: $msg</p>";
}
