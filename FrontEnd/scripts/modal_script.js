document.addEventListener("DOMContentLoaded", function () {
  if (getIsConnected()) {
    modalTrigger.style.display = "block";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    editModeBanner.style.display = "flex";
  }
});
