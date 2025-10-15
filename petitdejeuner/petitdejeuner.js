// ✅ 1. Créer une liste dans le localStorage (si elle n'existe pas déjà)
const listeCoursesParDefaut = [
    { nom: "Tresor Cereale", prix: 3.29 , poids: "1k" },
    { nom: "Prince Biscuit", prix: 1.99, poids: "300g" },
    { nom: "Compote de Pomme", prix: 2.99, poids: "1k" },
    { nom: "Brioche aux pepites de chocolat", prix: 2.49, poids: "500g" },
    { nom: "Nutella", prix: 5.79, poids: "800g" },
    { nom: "Croissant", prix: 2.99, poids: "500g" },
    { nom: "Pain au chocolat", prix: 2.99, poids: "500g" },





];
localStorage.setItem("listeCourses", JSON.stringify(listeCoursesParDefaut));

// ✅ 2. Récupérer la liste depuis le localStorage
const listeCourses = JSON.parse(localStorage.getItem("listeCourses"));

// ✅ 3. Afficher les produits dans la page
const container = document.getElementById("liste");
container.innerHTML = `
  <ul>
    ${listeCourses
    .map(
        (item) => `
      <li>
        <strong>${item.nom}</strong> <br>
        Prix : ${item.prix} € <br>
        Poids : ${item.poids}
        <button onclick='ajouterAuPanier(${JSON.stringify(item)})'>Ajouter au panier</button>
      </li>
    `
    )
    .join("")}
  </ul>
`;