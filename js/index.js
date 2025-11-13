import {createField} from './functions.js'

// Création du formulaire
    const form = document.createElement('form');
    form.id = "inscriptionForm";

    const title = document.createElement('h2');
    title.textContent = "Inscription";
    form.appendChild(title);

    // Création des champs
    const nom = createField(form,'nom', 'Nom', 'text', 'Entrez votre nom de famille.');
    const prenom = createField(form,'prenom', 'Prénom', 'text', 'Entrez votre prénom.');
    const email = createField(form,'email', 'Email', 'email', 'Exemple : nom@exemple.com');
    const password = createField(form,'password', 'Mot de passe', 'password', '9 caractères minimum, dont une majuscule et un chiffre.', { minlength: 9,
    pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{9,}$" });
    const confirmPassword = createField(form,'confirmPassword', 'Confirmer le mot de passe', 'password', 'Ressaisissez votre mot de passe pour confirmation.');
    const telephone = createField(form,'telephone', 'Numéro de téléphone', 'tel', 'Format : +33 6 12 34 56 78 ou 0612345678', { pattern: "^(\\+33|0)[1-9](\\d{2}){4}$"});

    // Bouton de validation
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Valider";
    submitBtn.type = "submit";
    submitBtn.disabled = true;
    form.append(submitBtn);

    // Ajout du formulaire au body
    document.body.append(form);

    // Validation dynamique
    form.addEventListener('input', () => {
      const isValid = form.checkValidity() && password.value === confirmPassword.value;
      submitBtn.disabled = !isValid;
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (password.value !== confirmPassword.value) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      alert("Inscription réussie !");
      form.reset();
      submitBtn.disabled = true;
    });