import React from "react";
import { StackDivider, VStack } from "@chakra-ui/react";
import { BookmarkItem } from "../../components/bookmark-item";
import { BookmarkSkeleton } from "../../components/bookmark-skeleton";

export function BookmarksView(props) {
  return (
    <div>
      <BookmarkSkeleton loading={props.loading} />
      <VStack mt={20} spacing={6} align="stretch" divider={<StackDivider />}>
        {props.bookmarks.map((item) => (
          <BookmarkItem bookmark={item} />
        ))}
      </VStack>
    </div>
  );
}
