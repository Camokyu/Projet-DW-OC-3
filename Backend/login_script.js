function submitForm(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === 'sophie.bluel@test.tld' && password === 'S0phie') {

      document.getElementById('message').textContent = 'Connexion réussie !';
    } else {

      if (email !== 'sophie.bluel@test.tld') {
        document.getElementById('message').textContent = 'Email incorrect. Veuillez réessayer.';
      } else if (password !== 'S0phie') {
        document.getElementById('message').textContent = 'Mot de passe incorrect. Veuillez réessayer.';
      }
    }
  }
  
  
  