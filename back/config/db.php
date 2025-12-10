<?php
require_once ('../parameters/config.php');

// Connexion à MySQL
$conn = new mysqli(HOST, USER, PASSWORD, DATABASE);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}

// Pour les tests
echo "Connexion réussie à la base de données !";