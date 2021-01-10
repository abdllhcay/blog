import React, { useState } from "react";
import { createPost } from "../../services/post";
import { Redirect } from "react-router-dom";
import { NewPostView } from "./posts-new.view";

export function NewPost() {
  const [postId, setPostId] = useState(null);

  async function onSubmit(data) {
    var res = await createPost(data);
    if (res.id) {
      setPostId(res.id);
    }
  }

  return postId ? (
    <Redirect to={`/posts/${postId}`} />
  ) : (
    <NewPostView onSubmit={onSubmit} />
  );
}
