import { Stack, Skeleton } from "@chakra-ui/react";
import { PostItem } from "../../components/post-item";

export function PostsView(props) {
  return (
    <div>
      <Stack>
        {props.loading
          ? Array.from(Array(3), (e, i) => <Skeleton height="40px" mb={4} />)
          : props.posts.map((p) => <PostItem post={p} />)}
      </Stack>
    </div>
  );
}
