import { Stack } from "@chakra-ui/react";
import { PostItem } from "../../components/post-item";
import { PostSkeleton } from "../../components/post-skeleton";

export function PostsView(props) {
  return (
    <div>
      <Stack>
        <PostSkeleton loading={props.loading} />
        {props.posts.map((p) => (
          <PostItem post={p} />
        ))}
      </Stack>
    </div>
  );
}
