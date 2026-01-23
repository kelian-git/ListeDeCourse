import { createField } from './function.js';

export function initPage(root) {
  root.innerHTML = "";

  const form = document.createElement('form');
  form.id = "inscriptionForm";

  const title = document.createElement('h2');
  title.textContent = "Inscription";
  form.appendChild(title);

  // Création des champs
  const nom = createField(form, 'nom', 'Nom', 'text', 'Entrez votre nom de famille.');
  const prenom = createField(form, 'prenom', 'Prénom', 'text', 'Entrez votre prénom.');
  const email = createField(form, 'email', 'Email', 'email', 'Exemple : nom@exemple.com');
  const password = createField(form, 'password', 'Mot de passe', 'password',
    '9 caractères minimum, dont une majuscule, un caractère spécial et un chiffre.', {
      minlength: 9,
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{9,}$"
    });
  const confirmPassword = createField(form, 'confirmPassword', 'Confirmer le mot de passe', 'password',
    'Ressaisissez votre mot de passe pour confirmation.');
  const telephone = createField(form, 'telephone', 'Numéro de téléphone', 'tel',
    'Format : +33 6 12 34 56 78 ou 0612345678', {
      pattern: "^(\\+33|0)[1-9](\\d{2}){4}$"
    });

  // Bouton submit
  const submitBtn = document.createElement('button');
  submitBtn.textContent = "Valider";
  submitBtn.type = "submit";
  submitBtn.disabled = true;
  form.appendChild(submitBtn);

  // Div message
  const messageDiv = document.createElement('div');
  messageDiv.id = 'message';
  messageDiv.style.marginTop = '10px';
  form.appendChild(messageDiv);

  root.appendChild(form);

  // Activation du bouton si formulaire valide et mots de passe identiques
  form.addEventListener('input', () => {
    const isValid = form.checkValidity() && password.value === confirmPassword.value;
    submitBtn.disabled = !isValid;
  });

  // Soumission du formulaire
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      messageDiv.textContent = "Les mots de passe ne correspondent pas !";
      messageDiv.style.color = 'red';
      return;
    }

    // Préparation des données à envoyer
    const formData = new FormData();
    formData.append('firstname', prenom.value);
    formData.append('lastname', nom.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('phone', telephone.value);

    try {
      const response = await fetch('http://localhost/projetsmiseensituation/ListeDeCourse/back/api/user.php', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        messageDiv.textContent = "Inscription réussie !";
        messageDiv.style.color = 'green';
        form.reset();
        submitBtn.disabled = true;
      } else {
        messageDiv.textContent = result.error || "Erreur lors de l'inscription.";
        messageDiv.style.color = 'red';
      }

    } catch (err) {
      console.error(err);
      messageDiv.textContent = "Erreur serveur.";
      messageDiv.style.color = 'red';
    }
  });
}
