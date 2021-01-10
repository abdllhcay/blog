import { firestore, storeNamespace } from "./firebase";

export async function createPost(data) {
  data.date = storeNamespace.Timestamp.fromDate(new Date());

  return firestore
    .collection("posts")
    .add(data)
    .then((res) => true)
    .catch((error) => console.log(error));
}

export async function getPostList() {
  return await firestore.collection("posts").get();
}
