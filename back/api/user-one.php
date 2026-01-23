<?php

require_once '../repositories/UserRepository.php';


$userRepository = new UserRepository();
$result = $userRepository->findOne($_GET['id']);

if($result) {
    var_dump($result);
    echo 'OK';
} else {
    echo 'KO';
}