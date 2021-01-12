import React, { useState, useEffect } from "react";
import { BookmarksView } from "./bookmarks.view";
import { getBookmarkList } from "../../services/bookmark";

export function Bookmarks() {
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    getBookmarks();
  }, []);

  async function getBookmarks() {
    const res = await getBookmarkList();

    if (res.data.result) {
      setBookmarks(res.data.items);
      setLoading(false);
    }
  }

  return <BookmarksView bookmarks={bookmarks} loading={loading} />;
}
