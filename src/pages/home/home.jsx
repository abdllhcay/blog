import React, { useState, useEffect } from "react";
import { HomeView } from "./home.view";
import { getPostList } from "../../services/post";
import { getBookmarkList } from "../../services/bookmark";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState({ posts: true, bookmark: true });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const posts = await getPostList({ size: 3 });

    posts.forEach((p) => {
      let post = p.data();
      post.id = p.id;
      setPosts((current) => [...current, post]);
    });

    setLoading((prev) => ({ ...prev, posts: false }));

    const bookmarks = await getBookmarkList({ size: 2 });

    if (bookmarks.data.result) {
      setBookmarks(bookmarks.data.items);
    }

    setLoading((prev) => ({ ...prev, bookmark: false }));
  }
  return <HomeView posts={posts} bookmarks={bookmarks} loading={loading} />;
}
