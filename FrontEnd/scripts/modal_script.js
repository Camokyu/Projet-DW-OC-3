document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.getElementById("modal_trigger");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const modalClose = document.getElementById("modal_close");
  const loginButton = document.getElementById("login_button");
  const logoutButton = document.getElementById("logout_button");

  modalTrigger.addEventListener("click", function () {
    modal.style.display = "block";
    overlay.style.display = "block";
    console.log("Modale exécutée");
    const modalGallery = document.getElementById("modal_gallery");
    // NOTE on doit vider la modale des contenus déjà présent
    modalGallery.innerHTML = ""
    window.works.forEach((item) => createWorkElement(item, "modale"));

    //Problème : le style lignes 308-312 du fichier CSS ne s'applique pas


//avoir les works en main pour utilisation, Fait
// refacto createWorkElement (paramètre contexte, si contexte = modale créer icône poubelle portant l'ID de l'élément via dataset avec l'item, si contexte = null pas de modifs aka !context) Fait
//création du contenu de cette galerie, Fait
//styler le conteneur de la galerie selon la maquette, CF ligne 16
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    // NOTE l'overlay doit aussi disparaitre
    overlay.style.display = "none";
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
