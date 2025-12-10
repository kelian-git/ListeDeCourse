<?php
require_once __DIR__.'/../parameters/config.php';

// Connexion à MySQL
 $dsn = sprintf( 'mysql:dbname=%s;host=%s', DATABASE, HOST );
 
 echo $dsn;
 try {
     $conn = new PDO( $dsn, USER, PASSWORD);
     echo "Connexion réussie à la base de données !";
 } catch(Exception $e) {
     die("Connexion échouée : " . $e->getMessage());

 }

