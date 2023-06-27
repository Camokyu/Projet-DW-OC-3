const user = {
    username: 'admin',
    role: 'admin'
  };
  
  const secretKey = 'clef_test_temporaire';
  
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  localStorage.setItem('token', token);

if (token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log(decoded);
    if (decoded.role === 'admin') {
      // L'utilisateur est authentifié en tant qu'administrateur
      //Coder les permissions accordées en conséquence ici
    } else {
      // L'utilisateur n'a pas les autorisations d'administrateur
      // Rediriger ou afficher un message d'erreur approprié
    }
  } catch (error) {
    // Le token est invalide ou a expiré
    // Rediriger ou afficher un message d'erreur approprié
  }
} else {
  // L'utilisateur n'est pas connecté
  // Rediriger ou afficher un message d'erreur approprié
}
