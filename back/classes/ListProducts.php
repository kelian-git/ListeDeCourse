<?php

class ListProducts {
    private int $id;
    private int $idProduct;
    private int $idCommande;

    private int $quantity;

    public function __construct(int $id, int $idProduct, int $idCommande, int $quantity)
    {
        $this->id = $id;
        $this->idProduct = $idProduct;
        $this->idCommande = $idCommande;
        $this->quantity = $quantity;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getIdProduct(): int
    {
        return $this->idProduct;
    }

    public function setIdProduct(int $idProduct): self
    {
        $this->idProduct = $idProduct;
        return $this;
    }

    public function getIdCommande(): int
    {
        return $this->idCommande;
    }

    public function setIdCommande(int $idCommande): self
    {
        $this->idCommande = $idCommande;
        return $this;
    }
    

    public function getQuantity(): int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }
}
