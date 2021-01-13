import { Heading, Divider, Stack, Skeleton } from "@chakra-ui/react";
import { PostLink } from "../../components/post-link";

export function HomeView(props) {
  return (
    <div>
      <Heading size="lg" ml={5} mb={3}>
        Son Yazılar
      </Heading>
      <Divider ml={5} mb={3} style={{ borderBottomWidth: 5 }} />
      <Stack>
        {props.loading
          ? Array.from(Array(3), (e, i) => <Skeleton height="40px" mb={4} />)
          : props.posts.slice(0, 3).map((p) => <PostLink post={p} />)}
      </Stack>
    </div>
  );
}
