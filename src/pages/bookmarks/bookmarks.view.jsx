import React from "react";
import { StackDivider, VStack } from "@chakra-ui/react";
import { BookmarkItem } from "../../components/bookmark-item";
import { BookmarkSkeleton } from "../../components/bookmark-skeleton";
import { PageHeading } from "../../components/page-heading";

export function BookmarksView(props) {
  return (
    <div>
      <PageHeading title="Yer İmleri">
        Faydalı bulduğum yazı, video ve içerik linkleri
      </PageHeading>
      <BookmarkSkeleton loading={props.loading} />
      <VStack spacing={6} align="stretch" divider={<StackDivider />}>
        {props.bookmarks.map((item) => (
          <BookmarkItem bookmark={item} />
        ))}
      </VStack>
    </div>
  );
}
