<?php

require_once '../repositories/UserRepository.php';


$data = [
    $_POST['firstname'],
    $_POST['lastname'],
    $_POST['email'],
    $_POST['password'],
    $_POST['phone']
];

$userRepository = new UserRepository();
$result = $userRepository->save($data);

if($result) {
    echo 'OK';
} else {
    echo 'KO';
}