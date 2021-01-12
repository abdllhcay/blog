export function isLoggedIn() {
  return localStorage.getItem("loggedIn");
}

export function removeCurrentUser() {
  localStorage.removeItem("loggedIn");
}
