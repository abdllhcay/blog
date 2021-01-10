import React from "react";
import { createPost } from "../../services/post";
import { NewPostView } from "./posts-new.view";

export function NewPost() {
  async function onSubmit(data) {
    var res = await createPost(data);

    console.log(res);
  }

  return <NewPostView onSubmit={onSubmit} />;
}
