<?php
include './methods.php';
include 'connection.php';

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str);
$_DELETE = array_merge($_DELETE, (array) $json_obj);


$id = $_DELETE['id'];

$sql = "DELETE FROM user where id_user = ? limit 1";

$query = $pdo->prepare($sql);
$query->bindParam(1, $id);

if (!$query->execute()) echo 'Erro ao deletar usuário!', exit;

echo "Usuário $id deletado com sucesso!";

exit;
