-- 1️⃣ Création de la base
CREATE DATABASE IF NOT EXISTS my_shop CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- 2️⃣ Sélection de la base
USE my_shop;

-- 3️⃣ Table Users
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL
);

-- 4️⃣ Table Category
CREATE TABLE IF NOT EXISTS Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- 5️⃣ Table Product
CREATE TABLE IF NOT EXISTS Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    idCategorie INT NOT NULL,
    FOREIGN KEY (idCategorie) REFERENCES Category(id) ON DELETE CASCADE
);

-- 6️⃣ Table Commande
CREATE TABLE IF NOT EXISTS Commande (
    id INT AUTO_INCREMENT PRIMARY KEY,
    createdAt DATETIME NOT NULL,
    idUser INT NOT NULL,
    total FLOAT NOT NULL,
    FOREIGN KEY (idUser) REFERENCES Users(id) ON DELETE CASCADE
);

-- 7️⃣ Table ListProducts
CREATE TABLE IF NOT EXISTS ListProducts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idProduct INT NOT NULL,
    idCommande INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (idProduct) REFERENCES Product(id) ON DELETE CASCADE,
    FOREIGN KEY (idCommande) REFERENCES Commande(id) ON DELETE CASCADE
);
