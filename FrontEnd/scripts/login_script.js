let authToken = null;

function submitForm(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value; //ici 'email' et 'password' sont les ID concernés, situés dans la balise "input" du form de login_page.html

    const data = {
      email: email,
      password: password
    };

    fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          throw new Error('Utilisateur non trouvé.');
        } else if (response.status === 401) {
          throw new Error('Non autorisé.');
        } else {
          throw new Error('Une erreur s\'est produite lors de la connexion.');
        }
      })
      .then(responseData => {
        const userId = responseData.userId;
        authToken = responseData.token;
        window.location.href = "index.html";
 
        //userId et authToken peuvent être utilisés, stockés dans une variable ect ici

      })
      .catch(error => {
        console.error('Erreur de la requête:', error);
        document.getElementById('message').textContent = error.message;
      });
}
