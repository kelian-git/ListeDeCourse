<?php

require_once(__DIR__ . '/classes/Category.php');
require_once (__DIR__.'/classes/Order.php');
require_once (__DIR__.'/classes/ListProducts.php');
require_once (__DIR__.'/classes/Product.php');
require_once (__DIR__.'/classes/Users.php');
require_once (__DIR__.'/classes/ListProducts.php');
require_once (__DIR__.'/repositories/ProductRepository.php');

$meet= new Category(1,"Meet");
$product1 = new Product(1,"beef",3.50,500.0,$meet->getId());
var_dump($product1);
$productRepo = new ProductRepository();
$productRepo->save($product1); // L'ID sera rempli après save()
