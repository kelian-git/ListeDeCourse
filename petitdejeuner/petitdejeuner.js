// ✅ 1. Create a list in localStorage if it doesn't exist
const defaultProducts = [
  { nom: "Tresor Cereale", prix: 3.29 , poids: "1k" },
  { nom: "Prince Biscuit", prix: 1.99, poids: "300g" },
  { nom: "Compote de Pomme", prix: 2.99, poids: "1k" },
  { nom: "Brioche aux pepites de chocolat", prix: 2.49, poids: "500g" },
  { nom: "Nutella", prix: 5.79, poids: "800g" },
  { nom: "Croissant", prix: 2.99, poids: "500g" },
  { nom: "Pain au chocolat", prix: 2.99, poids: "500g" },
];

localStorage.setItem("productList", JSON.stringify(defaultProducts));

// ✅ 2. Retrieve the list from localStorage
const productList = JSON.parse(localStorage.getItem("productList"));

// ✅ 3. Display products in HTML
const container = document.getElementById("liste");
container.innerHTML = `
  <ul>
    ${productList
      .map(
        (item, index) => `
      <li>
        <strong>${item.nom}</strong> <br>
        Prix : ${item.prix} € <br>
        Poids : ${item.poids} <br>
        <button onclick='addToCart(${JSON.stringify(item)})'>Ajouter au panier</button>
      </li>
    `
      )
      .join("")}
  </ul>
`;
