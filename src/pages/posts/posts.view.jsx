import { Stack } from "@chakra-ui/react";
import { PostItem } from "../../components/post-item";
import { PostSkeleton } from "../../components/post-skeleton";
import { PageHeading } from "../../components/page-heading";

export function PostsView(props) {
  return (
    <div>
      <PageHeading title="Yazılarım">
        Aşağı yukarı programlama ile ilgili yazılarım
      </PageHeading>
      <Stack>
        <PostSkeleton loading={props.loading} />
        {props.posts.map((p) => (
          <PostItem post={p} />
        ))}
      </Stack>
    </div>
  );
}
