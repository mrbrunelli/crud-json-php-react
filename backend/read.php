<?php
include 'connection.php';

header("Access-Control-Allow-Origin: *");

$sql = "SELECT * FROM user";

$query = $pdo->prepare($sql);

if (!$query->execute()) echo 'Erro ao listar usuários!', exit;

$fetch = $query->fetchAll(PDO::FETCH_OBJ);
$json = json_encode($fetch);
echo $json;

exit;
