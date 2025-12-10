    export const IMAGE_BASE_PATH = "assets/img/meat/";

    export const listeCourses5 = [
        { name: "Poulet", price: 6.50, weight: "1kg", image: "poulet.png" },
        { name: "Viande Haché", price: 7.20, weight: "500g", image: "viande-hache.jpg" },
        { name: "Boulette", price: 5.80, weight: "400g", image: "boulette.jpg" },
        { name: "Poisson Pané", price: 4.90, weight: "300g", image: "poisson-pane.jpg" },
        { name: "Steak Haché", price: 8.50, weight: "600g", image: "steak-hache.jpg" },
        { name: "Viande Bovine", price: 12.90, weight: "1kg", image: "viande-bovine.jpg" },
        { name: "Saumon", price: 14.50, weight: "400g", image: "saumon.jpg" },
        { name: "Jambon", price: 3.80, weight: "4 tranches (200g)", image: "jambon.jpg" },
        { name: "Cabillaud", price: 11.00, weight: "500g", image: "cabillaud.jpg" },
        { name: "Saucisses", price: 4.50, weight: "6 pièces (400g)", image: "saucisses.jpg" },
        { name: "Nuggets", price: 5.20, weight: "350g", image: "nuggets.jpg" }
    ];

    localStorage.setItem("listeCourses5", JSON.stringify(listeCourses5));
    export function initPage(root) {
    const container = root.querySelector("#liste") || document.getElementById("liste");
    if (!container) return;

    container.innerHTML = listeCourses5
        .map((item, index) => `
        <article class="gallery-item">
          <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p><strong>prix :</strong> ${item.price} €</p>
          <p><strong>poids :</strong> ${item.weight}</p>
          <button type="button" data-index="${index}">Ajouter au panier</button>
        </article>
    `)
        .join("");

    container.querySelectorAll("button[data-index]").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = Number(btn.dataset.index);
            const produit = listeCourses5[index];
            if (typeof window.addToCart === "function") {
                window.addToCart(produit);
            }
        });
    });
}
