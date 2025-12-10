import { createField } from './function.js';

export function initPage(root) {
  root.innerHTML = "";

  const form = document.createElement('form');
  form.id = "connexionForm";

  const title = document.createElement('h2');
  title.textContent = "Connexion";
  form.appendChild(title);

  const name = createField(form, 'name', 'Nom', 'text', 'Entrez votre nom.');
  const password = createField(form, 'password', 'Mot de passe', 'password', 'Entrez votre mot de passe.');

  const submitBtn = document.createElement('button');
  submitBtn.textContent = "Se connecter";
  submitBtn.type = "submit";
  submitBtn.disabled = true;
  form.append(submitBtn);

  root.append(form);

  form.addEventListener('input', () => {
    const isValid = form.checkValidity();
    submitBtn.disabled = !isValid;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Connexion réussie !");
    form.reset();
    submitBtn.disabled = true;
  });
}
