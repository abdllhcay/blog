import React, { useState } from "react";
import { createPost } from "../../services/post";
import { Redirect } from "react-router-dom";
import { NewPostView } from "./posts-new.view";
import { createEditorState } from "medium-draft";
import { stateToHTML } from "draft-js-export-html";

export function NewPost() {
  const [editorState, setEditorState] = useState(createEditorState());
  const [postId, setPostId] = useState(null);

  async function onSubmit(data) {
    data.content = stateToHTML(editorState.getCurrentContent());
    var res = await createPost(data);
    if (res.id) {
      setPostId(res.id);
    }
  }

  function onEditorStateChange(editorState) {
    setEditorState(editorState);
  }

  return postId ? (
    <Redirect to={`/posts/${postId}`} />
  ) : (
    <NewPostView
      onSubmit={onSubmit}
      onEditorStateChange={onEditorStateChange}
      editorState={editorState}
    />
  );
}
