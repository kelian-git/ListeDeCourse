// 🧺 cart.js — manage the shopping cart

// Load existing cart or create empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display the cart in HTML container
function displayCart() {
  const container = document.getElementById("listePanier");
  if (!container) return; // si la page n’a pas de panier, stop

  if (cart.length === 0) {
    container.innerHTML = "<li>Le panier est vide 🛒</li>";
    document.getElementById("totalPanier").textContent = `Total : 0.00 €`;
    return;
  }

  container.innerHTML = cart
    .map(
      (item, index) => `
        <li>
          <div>
            <strong>${item.nom}</strong> — ${item.prix} € (${item.poids})
          </div>
          <button onclick="removeFromCart(${index})">
            Supprimer
          </button>
        </li>
      `
    )
    .join("");

  // Calculate total
  const total = cart.reduce((acc, item) => acc + parseFloat(item.prix), 0);
  document.getElementById("totalPanier").textContent = `Total : ${total.toFixed(2)} €`;
}

// Remove one product
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Add a product
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  alert(`${product.nom} a été ajouté au panier 🛍️`);
}

// Empty the cart
function emptyCart() {
  if (confirm("Voulez-vous vraiment vider le panier ?")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
}

// Make functions global
window.addToCart = addToCart;
window.emptyCart = emptyCart;

// Display cart on page load
window.addEventListener("DOMContentLoaded", displayCart);
