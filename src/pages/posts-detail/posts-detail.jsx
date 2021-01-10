import React, { useEffect, useState } from "react";
import { getPost } from "../../services/post";
import { PostDetailView } from "./posts-detail.view";

export function PostDetail(props) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const postId = props.match.params.postId;

  useEffect(() => {
    getPostDetail(postId);
  }, [postId]);

  async function getPostDetail(postId) {
    const post = await getPost(postId);
    if (post.exists) {
      setPost(post.data());
      setLoading(false);
    }
  }

  return <PostDetailView post={post} loading={loading} />;
}
