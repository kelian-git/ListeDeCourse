import { listeCourses } from './Shopping/fruit-vegetable/fruit-vegetable.js';
import { addToCart } from './panier/panier.js';

// Fusionner tous les produits
const allProducts = [...listeCourses];
console.log(allProducts)
// Création de la barre de recherche
const searchSection = document.createElement('section');
searchSection.classList.add('search-container');

const searchInput = document.createElement('input');
searchInput.type = "text";
searchInput.placeholder = "Rechercher un produit...";
searchInput.classList.add('search-input');
searchSection.appendChild(searchInput);

document.body.appendChild(searchSection);

// Conteneur suggestions
const suggestionBox = document.createElement('div');
suggestionBox.classList.add('suggestions-box');
searchSection.appendChild(suggestionBox);

// Filtrer et afficher les suggestions
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  suggestionBox.innerHTML = "";

  const filtered = allProducts.filter(product =>
 product && product.name && product.name.toLowerCase().includes(query)  );

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item');
    div.textContent = `${product.name} — ${product.price}€ (${product.weight})`;

    // Ajouter au panier au clic
    div.addEventListener('click', () => {
      addToCart(product); // appel à cart.js
      searchInput.value = "";
      suggestionBox.innerHTML = "";
    });

    suggestionBox.appendChild(div);
  });
});
