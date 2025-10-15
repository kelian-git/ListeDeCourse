const listeCourses = [
    { nom: "Poulet", categorie: "Viande", prix: 6.50, poids: "1kg", image: "../../assets/img/meat/poulet.png" },
    { nom: "Viande Haché", categorie: "Viande", prix: 7.20, poids: "500g", image: "../../assets/img/meat/viande-hache.jpg" },
    { nom: "Boulette", categorie: "Viande", prix: 5.80, poids: "400g", image: "../../assets/img/meat/boulette.jpg" },
    { nom: "Poisson Pané", categorie: "Poisson", prix: 4.90, poids: "300g", image: "../../assets/img/meat/poisson-pane.jpg" },
    { nom: "Steak Haché", categorie: "Viande", prix: 8.50, poids: "600g", image: "../../assets/img/meat/steak-hache.jpg" },
    { nom: "Viande Bovine", categorie: "Viande", prix: 12.90, poids: "1kg", image: "../../assets/img/meat/viande-bovine.jpg" },
    { nom: "Saumon", categorie: "Poisson", prix: 14.50, poids: "400g", image: "../../assets/img/meat/saumon.jpg" },
    { nom: "Jambon", categorie: "Charcuterie", prix: 3.80, poids: "4 tranches (200g)", image: "../../assets/img/meat/jambon.jpg" },
    { nom: "Cabillaud", categorie: "Poisson", prix: 11.00, poids: "500g", image: "../../assets/img/meat/cabillaud.jpg" },
    { nom: "Saucisses", categorie: "Charcuterie", prix: 4.50, poids: "6 pièces (400g)", image: "../../assets/img/meat/saucisses.jpg" },
    { nom: "Nuggets", categorie: "Viande", prix: 5.20, poids: "350g", image: "../../assets/img/meat/nuggets.jpg" }
];

localStorage.setItem("listeCourses", JSON.stringify(listeCourses));

const container = document.getElementById("liste");

container.innerHTML = `
  ${listeCourses.map(item => `
    <article class="gallery-item">
      <img src="${item.image}" alt="${item.nom}">
      <h2>${item.nom}</h2>
      <p><strong>Catégorie :</strong> ${item.categorie}</p>
      <p><strong>Prix :</strong> ${item.prix} €</p>
      <p><strong>Poids :</strong> ${item.poids}</p>
    </article>
  `).join("")}
`;
