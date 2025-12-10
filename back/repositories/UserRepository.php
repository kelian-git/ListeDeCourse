<?php

require_once '../config/db.php'; // connexion à la BDD

class UserRepository
{
    // $data = ['firstname', 'lastname', 'email', 'password', 'phone']
    public function save(array $data): bool
    {
        global $conn;

        if (count($data) < 5) {
            return false; // données manquantes
        }

        $firstname = $data[0];
        $lastname = $data[1];
        $email = $data[2];
        $password = password_hash($data[3], PASSWORD_DEFAULT); // hashage sécurisé
        $phone = $data[4];

        // Préparer la requête
        $stmt = $conn->prepare("INSERT INTO Users (name, lastname, email, password, phone) VALUES (?, ?, ?, ?, ?)");
        if (!$stmt) {
            return false;
        }

        // Lier les paramètres
        $stmt->bind_param("ssssi", $firstname, $lastname, $email, $password, $phone);

        // Exécuter et retourner le résultat
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    public function findOne(int $id) {
        global $conn;

        $stmt = $conn->prepare("SELECT * FROM Users WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_assoc();
        $stmt->close();

        return $result;
    }

    public function findAll(): array {
        global $conn;

        $result = $conn->query("SELECT * FROM Users");
        $users = [];
        while($row = $result->fetch_assoc()) {
            $users[] = $row;
        }

        return $users;
    }
}
