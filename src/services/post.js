import { firestore, storeNamespace } from "./firebase";

export async function createPost(data) {
  data.date = storeNamespace.Timestamp.fromDate(new Date());
  return await firestore.collection("posts").add(data);
}

export async function getPostList({ size } = {}) {
  return await firestore
    .collection("posts")
    .orderBy("date", "desc")
    .limit(size)
    .get();
}

export async function getPost(postId) {
  return await firestore.collection("posts").doc(postId).get();
}
