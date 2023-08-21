document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.getElementById("modal_trigger");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal_close");
  const loginButton = document.getElementById("login_button");
  const logoutButton = document.getElementById("logout_button");

  modalTrigger.addEventListener("click", function () {
    modal.style.display = "block";
    console.log("Modale exécutée");
    const modalGallery = document.getElementById("modal_gallery");
//avoir les works en main pour utilisation, 
// refacto createWorkElement (paramètre contexte, si contexte = modale créer icône poubelle portant l'ID de l'élément via dataset avec l'item, si contexte = null pas de modifs aka !context)
//création du contenu de cette galerie,
//styler le conteneur de la galerie selon la maquette,
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  logoutButton.addEventListener("click", function () {
    removeToken();
  });

  if (isConnected) {
    modalTrigger.style.display = "block";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
  }
});
