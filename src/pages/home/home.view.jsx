import { Stack, VStack, StackDivider } from "@chakra-ui/react";
import { PostItem } from "../../components/post-item";
import { PostSkeleton } from "../../components/post-skeleton";
import { BookmarkItem } from "../../components/bookmark-item";
import { BookmarkSkeleton } from "../../components/bookmark-skeleton";
import { HomeDivider } from "../../components/home-divider";
import { HomeHeading } from "../../components/home-heading";

export function HomeView(props) {
  return (
    <div>
      <HomeHeading>Son Yazılar</HomeHeading>
      <HomeDivider />
      <Stack mb={16}>
        <PostSkeleton loading={props.loading} />
        {props.posts.map((p) => (
          <PostItem post={p} />
        ))}
      </Stack>
      <HomeHeading>Son Yer İmleri</HomeHeading>
      <HomeDivider />
      <BookmarkSkeleton loading={props.loading} />
      <VStack spacing={6} mt={8} align="stretch" divider={<StackDivider />}>
        {props.bookmarks.map((item) => (
          <BookmarkItem bookmark={item} />
        ))}
      </VStack>
    </div>
  );
}
