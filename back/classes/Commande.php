<?php

class Commande {
    private int $id;
    private DateTime $createdAt;
    private int $idUser;
    private float $total;

    public function __construct(int $id, DateTime $createdAt, int $idUser, float $total)
    {
        $this->id = $id;
        $this->createdAt = $createdAt;
        $this->idUser = $idUser;
        $this->total = $total;
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

    public function getCreatedAt(): DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getIdUser(): int
    {
        return $this->idUser;
    }

    public function setIdUser(int $idUser): self
    {
        $this->idUser = $idUser;
        return $this;
    }

    public function getTotal(): float
    {
        return $this->total;
    }

    public function setTotal(float $total): self
    {
        $this->total = $total;
        return $this;
    }
}
