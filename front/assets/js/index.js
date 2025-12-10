import { listeCourses } from './fruit-vegetable.js';
import { listeCourses2 } from './dairy.js';
import { listeCourses3 } from './boisson.js';
import { listeCourses4 } from './hygiene.js';
import { listeCourses5 } from './meat.js';
import { listeCourses6 } from './petitdejeuner.js';

import { addToCart } from './panier.js';

const allProducts = [...listeCourses,...listeCourses2,...listeCourses3,...listeCourses4,...listeCourses5,...listeCourses6];

export function initSearch(container) {
  const searchSection = document.createElement('div');
  searchSection.classList.add('search-container');

  const searchInput = document.createElement('input');
  searchInput.type = "text";
  searchInput.placeholder = "Rechercher un produit...";
  searchInput.classList.add('search-input');

  searchSection.appendChild(searchInput);

  const suggestionBox = document.createElement('div');
  suggestionBox.classList.add('suggestions-box');
  searchSection.appendChild(suggestionBox);

  container.appendChild(searchSection);

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

  document.addEventListener('click', (e) => {
    if (!searchSection.contains(e.target)) {
      suggestionBox.style.display = "none";
    }
  });
}
