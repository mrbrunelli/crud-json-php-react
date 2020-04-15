<?php
include 'connection.php';

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str);
$_POST = array_merge($_POST, (array) $json_obj);

$name = $_POST['name'];
$email = $_POST['email'];
$pass = md5($_POST['password']);

$sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";

$query = $pdo->prepare($sql);

$query->bindParam(1, $name);
$query->bindParam(2, $email);
$query->bindParam(3, $pass);

if (!$query->execute()) echo 'Erro ao gravar usuário!', exit;

echo 'Usuário cadastrado com sucesso!';

exit;
