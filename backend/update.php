<?php
include './methods.php';
include 'connection.php';

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str);
$_PUT = array_merge($_PUT, (array) $json_obj);

$id = $_PUT['id_user'];
$name = $_PUT['name'];
$email = $_PUT['email'];
$pass = md5($_PUT['password']);

$sql = "UPDATE user set name = ?, email = ?, password = ? WHERE id_user = $id";

$query = $pdo->prepare($sql);

$query->bindParam(1, $name);
$query->bindParam(2, $email);
$query->bindParam(3, $pass);

if (!$query->execute()) echo 'Erro ao atualizar usuário!', exit;

echo 'Usuário atualizado com sucesso!';

exit;
