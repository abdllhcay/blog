import { auth } from "./firebase";

export async function signin(email, password) {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => true)
    .catch((error) => false);
}
