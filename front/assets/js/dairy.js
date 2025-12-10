    export const IMAGE_BASE_PATH = "../../assets/img/dairy/";

    export const listeCourses2 = [
        { name: "Lait Demi-Écrémé", price: 1.20, weight: "1L", image: "lait-demi-ecreme.jpg" },
        { name: "Beurre Doux", price: 2.50, weight: "250g", image: "beurre-doux.jpg" },
        { name: "Yaourt Nature", price: 3.80, weight: "4 x 125g", image: "yaourt-nature.jpg" },
        { name: "Crème Fraîche", price: 2.20, weight: "20cl", image: "creme-fraiche.jpg" },
        { name: "Fromage Camembert", price: 4.50, weight: "250g", image: "camembert.jpg" },
        { name: "Fromage Râpé", price: 3.30, weight: "200g", image: "fromage-rape.jpg" },
        { name: "Lait Chocolaté", price: 2.80, weight: "1L", image: "lait-chocolate.jpg" },
        { name: "Crème Dessert", price: 3.60, weight: "4 x 100g", image: "creme-dessert.jpg" },
        { name: "Yaourt aux Fruits", price: 4.00, weight: "4 x 125g", image: "yaourt-fruit.jpg" },
        { name: "Mozzarella", price: 2.70, weight: "125g", image: "mozzarella.jpg" },
        { name: "Fromage Blanc", price: 2.90, weight: "500g", image: "fromage-blanc.jpg" }
    ];

    export function initPage(root) {
    const container = root.querySelector("#liste");
    if (!container) return;

    container.innerHTML = listeCourses2.map((item, index) => `
        <article class="gallery-item">
            <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p><strong>Prix :</strong> ${item.price} €</p>
            <p><strong>Poids :</strong> ${item.weight}</p>
            <button data-index="${index}">Ajouter au panier</button>
        </article>
    `).join("");

    container.querySelectorAll("button").forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(listeCourses2[index]));
    });
}
