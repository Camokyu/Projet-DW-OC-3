document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.getElementById("modal_trigger");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const modalClose = document.getElementById("modal_close");
  const loginButton = document.getElementById("login_button");
  const logoutButton = document.getElementById("logout_button");
  const editModeBanner = document.getElementById("edit_mode_banner");
  const modalForm = document.getElementById("modal_form");

  modalTrigger.addEventListener("click", function () {
    modal.style.display = "block";
    overlay.style.display = "block";
    console.log("Modale exécutée");
    const modalGallery = document.getElementById("modal_gallery");
    modalGallery.innerHTML = ""
    window.works.forEach((item) => createWorkElement(item, "modale"));
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  logoutButton.addEventListener("click", function () {
    removeToken();
  });

  if (isConnected) {
    modalTrigger.style.display = "block";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    editModeBanner.style.display = "block";
  }
});
