const IMAGE_BASE_PATH = "../../assets/img/dejeuner/";

// ✅ 1. Create a list in localStorage if it doesn't exist
const defaultProducts = [
  { name: "Tresor Cereale", price: 3.29 , weight: "1k", image : "cereale.jpg" },
  { name: "Prince Biscuit", price: 1.99, weight: "300g", image : "prince.jpg"  },
  { name: "Compote de Pomme", price: 2.99, weight: "1k", image : "compote.jpg"  },
  { name: "Brioche aux pepites de chocolat", price: 2.49, weight: "500g", image : "brioche.jpg"  },
  { name: "Nutella", price: 5.79, weight: "800g", image : "nutella.jpg"  },
  { name: "Croissant", price: 2.99, weight: "500g", image : "croissant.jpg"  },
  { name: "Pain au chocolat", price: 2.99, weight: "500g", image : "pain chocolat.jpg"  },
];

localStorage.setItem("productList", JSON.stringify(defaultProducts));

// ✅ 2. Retrieve the list from localStorage
const productList = JSON.parse(localStorage.getItem("productList"));

// ✅ 3. Display products in HTML
const container = document.getElementById("liste");
container.innerHTML = `
    ${productList
      .map(
        (item, index) => `
      <article class="gallery-item">
        <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}"><br>
        <strong>${item.name}</strong> <br>
        prix : ${item.price} € <br>
        poids : ${item.weight} <br>
        <button onclick='addToCart(${JSON.stringify(item)})'>Ajouter au panier</button>
        </article>
    `
      )
      .join("")}

`;
