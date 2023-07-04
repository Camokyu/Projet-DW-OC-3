document.addEventListener("DOMContentLoaded", function () {
  const modalTrigger = document.getElementById("modal_trigger");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal_close");
  // const modalBodyContent = document.getElementById("modal_body");
  const loginButton = document.getElementById("login_button");
  const logoutButton = document.getElementById("logout_button");

  modalTrigger.addEventListener("click", function () {
    modal.style.display = "block";
    displayWorks("modal_body");

    console.log("Modale exécutée");
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
