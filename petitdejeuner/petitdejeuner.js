// ✅ 1. Create a list in localStorage if it doesn't exist
const defaultProducts = [
  { name: "Tresor Cereale", price: 3.29 , weight: "1k" },
  { name: "Prince Biscuit", price: 1.99, weight: "300g" },
  { name: "Compote de Pomme", price: 2.99, weight: "1k" },
  { name: "Brioche aux pepites de chocolat", price: 2.49, weight: "500g" },
  { name: "Nutella", price: 5.79, weight: "800g" },
  { name: "Croissant", price: 2.99, weight: "500g" },
  { name: "Pain au chocolat", price: 2.99, weight: "500g" },
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
        <strong>${item.name}</strong> <br>
        price : ${item.price} € <br>
        weight : ${item.weight} <br>
        <button onclick='addToCart(${JSON.stringify(item)})'>Ajouter au panier</button>
      </li>
    `
      )
      .join("")}
  </ul>
`;
