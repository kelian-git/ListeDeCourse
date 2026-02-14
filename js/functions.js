 // Fonction pour créer un champ avec label + helper
    export function createField(form,id, labelText, type, helperText, attributes = {}) {
      const label = document.createElement('label');
      label.htmlFor = id;
      label.textContent = labelText + ' *';

      const input = document.createElement('input');
      input.type = type;
      input.id = id;
      input.name = id;
      input.required = true;

      // Ajout des attributs spécifiques (ex : pattern, minlength)
      Object.entries(attributes).forEach(([key, value]) => input.setAttribute(key, value));

      const small = document.createElement('small');
      small.textContent = helperText;

      form.append(label, input, small);
      return input;
    }