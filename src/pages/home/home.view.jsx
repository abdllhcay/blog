import { Stack, Skeleton, VStack, StackDivider } from "@chakra-ui/react";
import { PostItem } from "../../components/post-item";
import { BookmarkItem } from "../../components/bookmark-item";
import { HomeDivider } from "../../components/home-divider";
import { HomeHeading } from "../../components/home-heading";

export function HomeView(props) {
  return (
    <div>
      <HomeHeading>Son Yazılar</HomeHeading>
      <HomeDivider />
      <Stack mb={16}>
        {props.loading
          ? Array.from(Array(3), (e, i) => <Skeleton height="40px" mb={4} />)
          : props.posts.map((p) => <PostItem post={p} />)}
      </Stack>
      <HomeHeading>Son Yer İmleri</HomeHeading>
      <HomeDivider />
      <VStack spacing={6} align="stretch" divider={<StackDivider />}>
        {props.bookmarks.map((item) => (
          <BookmarkItem bookmark={item} />
        ))}
      </VStack>
    </div>
  );
}
