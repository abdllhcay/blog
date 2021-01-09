import { auth } from "./firebase";

export async function signin(credentials) {
  return auth
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then((res) => true)
    .catch((error) => false);
}
