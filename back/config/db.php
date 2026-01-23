<?php
require_once __DIR__.'/../parameters/config.php';

try {
    $dsn = sprintf('mysql:dbname=%s;host=%s', DATABASE, HOST);
    $conn = new PDO($dsn, USER, PASSWORD);
    // Activer le mode erreur PDO
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (Exception $e) {
    // Ici tu peux gérer l'erreur ou lever une exception
    die("Connexion échouée : " . $e->getMessage());
}
