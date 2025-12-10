<?php
require_once __DIR__.'/../config/db.php';

require_once __DIR__.'/../classes/Product.php';

class ProductRepository
{
    public function save(Product $product): bool
    {
        global $conn;

        $stmt = $conn->prepare("INSERT INTO Product (name, price, weight, idCategorie) VALUES (:n, :p, :w, :c)");
        if (!$stmt) return false;

        $stmt->bindParam(':n', $product->getName());
        $stmt->bindParam( ':p',$product->getPrice());
        $stmt->bindParam(':w',$product->getWeight());
        $stmt->bindParam(':c',$product->getIdCategorie());

        $result = $stmt->execute();

        if ($result) {
            $product->setId($conn->lastInsertId());
        }

        return $result;
    }
}
