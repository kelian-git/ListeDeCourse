<?php
require_once __DIR__ . '/../repositories/UserRepository.php';

// Toujours renvoyer du JSON
header('Content-Type: application/json');

// Instancier le repository
$repo = new UserRepository();

switch($_SERVER['REQUEST_METHOD']){

    // =====================================
    case 'GET':
    // Si un ID est fourni, renvoyer un utilisateur
    if (isset($_GET['id'])) {
        $id = (int) $_GET['id'];
        $user = $repo->findOne($id);

        if ($user) {
            echo json_encode(['success' => true, 'user' => $user]);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Utilisateur non trouvé']);
        }
    } 
    // Sinon renvoyer tous les utilisateurs
    else {
        $users = $repo->findAll();
        echo json_encode(['success' => true, 'users' => $users]);
    }
    break;

    // =====================================
    case 'POST':
        // Vérifier que toutes les données nécessaires sont présentes
        if (
            !isset($_POST['firstname'], $_POST['lastname'], $_POST['email'], $_POST['password'], $_POST['phone'])
        ) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Données manquantes']);
            exit;
        }

        // Créer l'utilisateur
        $result = $repo->save([
            $_POST['firstname'],
            $_POST['lastname'],
            $_POST['email'],
            $_POST['password'],
            $_POST['phone']
        ]);

        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Impossible de créer l’utilisateur']);
        }
    break;

    // =====================================
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
        break;
}
