import React, { useState, useEffect } from "react";
import { HomeView } from "./home.view";
import { getPostList } from "../../services/post";
import { getBookmarkList } from "../../services/bookmark";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const [posts, bookmarks] = await Promise.all([
      getPostList({ size: 3 }),
      getBookmarkList({ size: 2 }),
    ]);

    posts.forEach((p) => {
      let post = p.data();
      post.id = p.id;
      setPosts((current) => [...current, post]);
    });

    if (bookmarks.data.result) {
      setBookmarks(bookmarks.data.items);
    }

    setLoading(false);
  }
  return <HomeView posts={posts} bookmarks={bookmarks} loading={loading} />;
}
