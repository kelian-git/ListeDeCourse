let cart = JSON.parse(localStorage.getItem("cart")) || [];
let lastRoot = null;

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart(root) {
  if (!root) return;

  const list = root.querySelector("#listePanier");
  const totalEl = root.querySelector("#totalPanier");
  if (!list || !totalEl) return;

  if (cart.length === 0) {
    list.innerHTML = "<li>Le panier est vide 🛒</li>";
    totalEl.textContent = "Total : 0.00 €";
    return;
  }

  list.innerHTML = cart
    .map(
      (item, index) => `
        <li>
          <div>
            <strong>${item.name}</strong> — ${item.price} € (${item.weight})
          </div>
          <button data-index="${index}" data-action="remove">
            Supprimer
          </button>
        </li>
      `
    )
    .join("");

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
  totalEl.textContent = `Total : ${total.toFixed(2)} €`;
}

export function addToCart(product) {
  cart.push(product);
  saveCart();
  if (lastRoot) renderCart(lastRoot);
  alert(`${product.name} a été ajouté au panier 🛍️`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  if (lastRoot) renderCart(lastRoot);
}

function emptyCart() {
  if (confirm("Voulez-vous vraiment vider le panier ?")) {
    cart = [];
    saveCart();
    if (lastRoot) renderCart(lastRoot);
  }
}

export function initPage(root) {
  lastRoot = root;
  renderCart(root);

  const list = root.querySelector("#listePanier");
  if (list) {
    list.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action='remove']");
      if (!btn) return;
      const index = Number(btn.dataset.index);
      removeFromCart(index);
    });
  }

  const emptyBtn = root.querySelector("button[data-action='empty']");
  if (emptyBtn) {
    emptyBtn.addEventListener("click", emptyCart);
  }

  const orderBtn = root.querySelector("button[data-action='order']");
  if (orderBtn) {
    orderBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Votre panier est vide.");
      } else {
        alert("Commande en cours de traitement…");
      }
    });
  }
}

window.addToCart = addToCart;
window.emptyCart = emptyCart;
