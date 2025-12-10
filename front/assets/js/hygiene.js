    export const IMAGE_BASE_PATH = "assets/img/hygiene/";

    export const listeCourses4 = [
        { name: "Gel Douche", price: 4.50, weight: "250ml", image: "gel-douche.jpg" },
        { name: "Shampoing", price: 5.20, weight: "300ml", image: "shampoing.jpg" },
        { name: "Dentifrice", price: 3.00, weight: "75ml", image: "dentifrice.jpg" },
        { name: "Savon Liquide", price: 2.80, weight: "500ml", image: "savon-liquide.jpg" },
        { name: "Déodorant", price: 4.00, weight: "150ml", image: "deodorant.jpg" },
        { name: "Crème Hydratante", price: 9.90, weight: "200ml", image: "creme-hydratante.jpg" },
        { name: "Lotion Visage", price: 8.50, weight: "250ml", image: "lotion-visage.jpg" },
        { name: "Coton Démaquillant", price: 2.50, weight: "100 pièces", image: "coton-demaquillant.jpg" },
        { name: "Rasoir Jetable", price: 6.20, weight: "10 pièces", image: "rasoir-jetable.jpg" },
        { name: "Brosse à Dents", price: 3.50, weight: "1 pièce", image: "brosse-a-dents.jpg" },
        { name: "Crème Solaire", price: 12.00, weight: "150ml", image: "creme-solaire.jpg" }
    ];
    
    export function initPage(root) {
    const container = root.querySelector("#liste");
    if (!container) return;

    container.innerHTML = listeCourses4.map((item, index) => `
        <article class="gallery-item">
            <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p><strong>Prix :</strong> ${item.price} €</p>
            <p><strong>Contenance :</strong> ${item.weight}</p>
            <button data-index="${index}">Ajouter au panier</button>
        </article>
    `).join("");

    container.querySelectorAll("button").forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(listeCourses4[index]));
    });
}
