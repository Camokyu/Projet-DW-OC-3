function getAuthToken() {
  return sessionStorage.getItem("token")
}

function getIsConnected() {
  return Boolean(getAuthToken())
}

function removeAuthToken() {
  sessionStorage.removeItem("token");
  window.location.reload(false);
}
