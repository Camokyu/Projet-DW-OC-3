function getAuthToken() {
  return localStorage.getItem("token")
}

function getIsConnected() {
  return Boolean(getAuthToken())
}

function removeAuthToken() {
  localStorage.removeItem("token");
  window.location.reload(false);
}
