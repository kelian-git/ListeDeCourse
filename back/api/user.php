<?php

require_once '../repositories/UserRepository.php';

var_dump($_POST);
$data[] = $_POST['firstname'];
$userRepository = new UserRepository();
$result = $userRepository->save($data);
if($result) {
    echo 'OK';
} else {
    echo 'KO';
}