// fruit-vegetable.js
import { addToCart } from '../../panier/panier.js';

export const IMAGE_BASE_PATH = "../../assets/img/fruit-vegetable/";

export const listeCourses = [
    { name: "Pommes", price: 2.80, weight: "1kg", image: "pommes.jpg" },
    { name: "Bananes", price: 2.20, weight: "1kg", image: "bananes.jpg" },
    { name: "Oranges", price: 3.10, weight: "1kg", image: "oranges.jpg" },
    { name: "Poires", price: 3.50, weight: "1kg", image: "poires.jpg" },
    { name: "Fraises", price: 4.90, weight: "500g", image: "fraises.jpg" },
    { name: "Carottes", price: 1.80, weight: "1kg", image: "carottes.jpg" },
    { name: "Tomates", price: 2.50, weight: "1kg", image: "tomates.jpg" },
    { name: "Courgettes", price: 2.40, weight: "1kg", image: "courgettes.jpg" },
    { name: "Salade Verte", price: 1.50, weight: "1 pièce", image: "salades.jpg" },
    { name: "Brocolis", price: 2.90, weight: "500g", image: "brocolis.jpg" },
    { name: "Poivrons", price: 3.60, weight: "500g", image: "poivrons.jpg" }
];

export function initPage(root) {
    const container = root.querySelector("#liste");
    if (!container) return;

    container.innerHTML = listeCourses.map((item, index) => `
        <article class="gallery-item">
            <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p><strong>Prix :</strong> ${item.price} €</p>
            <p><strong>Poids :</strong> ${item.weight}</p>
            <button data-index="${index}">Ajouter au panier</button>
        </article>
    `).join("");

    container.querySelectorAll("button").forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(listeCourses[index]));
    });
}
