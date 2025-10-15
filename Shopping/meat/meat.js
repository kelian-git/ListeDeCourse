// 📁 Dossier où se trouvent toutes tes images
const IMAGE_BASE_PATH = "../../assets/img/meat/";

const listeCourses = [
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

localStorage.setItem("listeCourses", JSON.stringify(listeCourses));

const container = document.getElementById("liste");

container.innerHTML = `
  ${listeCourses.map(item => `
    <article class="gallery-item">
      <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p><strong>prix :</strong> ${item.price} €</p>
      <p><strong>poids :</strong> ${item.weight}</p>
    </article>
  `).join("")}
`;
