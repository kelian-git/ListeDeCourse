export function initPage(root) {
    const IMAGE_BASE_PATH = "../../assets/img/boisson/";

    const listeCourses = [
        { name: "Coca Cola", price: 1.50, weight: "1,5L", image: "coca.jpg" },
        { name: "Fanta", price: 1.50, weight: "1.5L", image: "fanta.jpg" },
        { name: "Sprite", price: 1.50, weight: "1.5L", image: "sprite.jpg" },
        { name: "Tropico", price: 1.50, weight: "1.5L", image: "tropico.jpg" },
        { name: "Oasis Tropical", price: 1.99, weight: "2L", image: "oasis.jpg" },
        { name: "Eau", price: 0.50, weight: "9L", image: "eau.jpg" },
        { name: "Eau Petillante", price: 1.50, weight: "9L", image: "eaup.jpg" },
        { name: "Jus de Pomme", price: 1.99, weight: "1.5L", image: "pomme.jpg" },
        { name: "Jus Multifruit", price: 1.99, weight: "1.5L", image: "multi.jpg" },
        { name: "Jus d'Orange", price: 1.99, weight: "1.5L", image: "orange.jpg" }
    ];

    const container = root.querySelector("#liste");
    if (!container) return;

    container.innerHTML = listeCourses.map((item, index) => `
        <article class="gallery-item">
            <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}">
            <strong>${item.name}</strong><br>
            prix : ${item.price} €<br>
            poids : ${item.weight}<br>
            <button data-index="${index}">Ajouter au panier</button>
        </article>
    `).join("");

    container.querySelectorAll("button").forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(listeCourses[index]));
    });
}
