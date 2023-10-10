document.addEventListener("DOMContentLoaded", function () {
  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  function openModal() {
    modal.style.display = "flex";
    overlay.style.display = "block";
  }

  function logout() {
    removeAuthToken();
  }

  const modalTrigger = document.getElementById("modal_trigger");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const modalClose = document.getElementById("modal_close_icon");
  const loginButton = document.getElementById("login_button");
  const logoutButton = document.getElementById("logout_button");
  const editModeBanner = document.getElementById("edit_mode_banner");
  const modalForm = document.getElementById("modal_form");
  const openForm = document.getElementById("open_form");

  modalTrigger.addEventListener("click",openModal);

  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  logoutButton.addEventListener("click", logout);

  if (getIsConnected()) {
    modalTrigger.style.display = "block";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    editModeBanner.style.display = "flex";
  }
});
