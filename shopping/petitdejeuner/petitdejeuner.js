export function initPage(root) {
    const IMAGE_BASE_PATH = "../../assets/img/dejeuner/";

    const productList = [
      { name: "Tresor Cereale", price: 3.29 , weight: "1k", image : "cereale.jpg" },
      { name: "Prince Biscuit", price: 1.99, weight: "300g", image : "prince.jpg"  },
      { name: "Compote de Pomme", price: 2.99, weight: "1k", image : "compote.jpg"  },
      { name: "Brioche aux pepites de chocolat", price: 2.49, weight: "500g", image : "brioche.jpg"  },
      { name: "Nutella", price: 5.79, weight: "800g", image : "nutella.jpg"  },
      { name: "Croissant", price: 2.99, weight: "500g", image : "croissant.jpg"  },
      { name: "Pain au chocolat", price: 2.99, weight: "500g", image : "pain chocolat.jpg"  }
    ];

    localStorage.setItem("productList", JSON.stringify(productList));

    const container = root.querySelector("#liste");
    if (!container) return;

    container.innerHTML = productList.map((item, index) => `
        <article class="gallery-item">
            <img src="${IMAGE_BASE_PATH + item.image}" alt="${item.name}">
            <strong>${item.name}</strong><br>
            prix : ${item.price} €<br>
            poids : ${item.weight}<br>
            <button data-index="${index}">Ajouter au panier</button>
        </article>
    `).join("");

    container.querySelectorAll("button").forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(productList[index]));
    });
}
