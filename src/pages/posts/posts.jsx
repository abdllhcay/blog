import React, { useState, useEffect } from "react";
import { PostsView } from "./posts.view";
import { getPostList } from "../../services/post";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const posts = await getPostList();
    posts.forEach((p) => {
      let post = p.data();
      post.id = p.id;
      setPosts((current) => [...current, post]);
    });

    setLoading(false);
  }

  return <PostsView posts={posts} loading={loading} />;
}
