import React, { useState, useEffect } from "react";
import { HomeView } from "./home.view";
import { getPostList } from "../../services/post";

export function Home() {
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

  return <HomeView posts={posts} loading={loading} />;
}
