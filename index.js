import { listeCourses } from '/shopping/fruit-vegetable/fruit-vegetable.js';
import { listeCourses2 } from '/shopping/dairy/dairy.js';
import { listeCourses3 } from '/shopping/boisson/boisson.js';
import { listeCourses4 } from '/shopping/hygiene/hygiene.js';
import { listeCourses5 } from '/shopping/meat/meat.js';
import { listeCourses6 } from '/shopping/petitdejeuner/petitdejeuner.js';

import { addToCart } from './panier/panier.js';

// Fusionner tous les produits
const allProducts = [...listeCourses,...listeCourses2,...listeCourses3,...listeCourses4,...listeCourses5,...listeCourses6];
console.log(allProducts)

export function initSearch(container) {
  // --- Création du conteneur de recherche ---
  const searchSection = document.createElement('div');
  searchSection.classList.add('search-container');

  const searchInput = document.createElement('input');
  searchInput.type = "text";
  searchInput.placeholder = "Rechercher un produit...";
  searchInput.classList.add('search-input');

  searchSection.appendChild(searchInput);

  // --- Fenêtre de suggestions flottante ---
  const suggestionBox = document.createElement('div');
  suggestionBox.classList.add('suggestions-box');
  searchSection.appendChild(suggestionBox);

  container.appendChild(searchSection);

  // --- Gestion de la recherche dynamique ---
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (!query.trim()) {
      suggestionBox.style.display = "none";
      return;
    }

    const filtered = allProducts.filter(product =>
      product && product.name && product.name.toLowerCase().includes(query)
    );

    filtered.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('suggestion-item');
      div.textContent = `${product.name} — ${product.price}€ (${product.weight})`;

      div.addEventListener('click', () => {
        addToCart(product);
        searchInput.value = "";
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
      });

      suggestionBox.appendChild(div);
    });

    suggestionBox.style.display = filtered.length > 0 ? "block" : "none";
  });

  // --- Masquer les suggestions si clic en dehors ---
  document.addEventListener('click', (e) => {
    if (!searchSection.contains(e.target)) {
      suggestionBox.style.display = "none";
    }
  });
}
