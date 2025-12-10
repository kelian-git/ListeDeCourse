<?php

require_once '../repositories/ProductRepository.php';

$productRepository = new ProductRepository();
$result = $productRepository->findAll();

if($result) {
    echo 'OK';
} else {
    echo 'KO';
}