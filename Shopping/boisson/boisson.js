// 📁 Dossier où se trouvent toutes tes images
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
    { name: "Jus d'Orange", price: 1.99, weight: "1.5L", image: "orange.jpg" },
];

localStorage.setItem("listeCourses", JSON.stringify(listeCourses));

const container = document.getElementById("liste");

container.innerHTML = `
  ${listeCourses.map(item => `
      <article class="gallery-item">
        <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}"><br>
        <strong>${item.name}</strong> <br>
        prix : ${item.price} € <br>
        poids : ${item.weight} <br>
        <button onclick='addToCart(${JSON.stringify(item)})'>Ajouter au panier</button>
        </article>
  `).join("")}
`;
