document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.getElementById("modal_trigger");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal_close");
  const loginButton = document.getElementById("login_button");
  const logoutButton = document.getElementById("logout_button");

  modalTrigger.addEventListener("click", function () {
    modal.style.display = "block";
    console.log("Modale exécutée");
    displayWorks("modal_body");

  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  logoutButton.addEventListener("click", function () {
    removeToken();
  });

  if (isConnected === true) {
    modalTrigger.style.display = "block";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
  }
});
