// 🧺 panier.js — gère le panier de l’application

// Charger le panier existant ou créer un panier vide
let panier = JSON.parse(localStorage.getItem("panier")) || [];

// Fonction d'affichage du panier dans un conteneur HTML
function afficherPanier() {
  const container = document.getElementById("listePanier");
  if (!container) return; // si la page n’a pas de panier, on arrête

  if (panier.length === 0) {
    container.innerHTML = "<li>Le panier est vide </li>";
    return;
  }

  container.innerHTML = panier
    .map(
      (item, index) => `
        <li>
          <div>
            <strong>${item.nom}</strong> — ${item.prix} € (${item.poids})
          </div>
          <button onclick="supprimerDuPanier(${index})" >
            Supprimer 
          </button>
        </li>
      `
    )
    .join("");
    // Calculer le total
  const total = panier.reduce((acc, item) => acc + parseFloat(item.prix), 0);
  document.getElementById("totalPanier").textContent = `Total : ${total.toFixed(2)} €`;

}



function supprimerDuPanier(index) {
  // Supprime 1 élément à la position 'index'
  panier.splice(index, 1);

  // Met à jour le localStorage
  localStorage.setItem("panier", JSON.stringify(panier));

  // Réaffiche le panier
  afficherPanier();
}


// Ajouter un produit
function ajouterAuPanier(produit) {
  panier.push(produit);
  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
  alert(`${produit.nom} a été ajouté au panier 🛍️`);
}

// Vider le panier
function viderPanier() {
  if (confirm("Voulez-vous vraiment vider le panier ?")) {
    panier = [];
    localStorage.setItem("panier", JSON.stringify(panier));
    afficherPanier();
  }
}

// Rendre les fonctions disponibles globalement
window.ajouterAuPanier = ajouterAuPanier;
window.viderPanier = viderPanier;

// Mettre à jour le panier dès le chargement de la page
window.addEventListener("DOMContentLoaded", afficherPanier);
