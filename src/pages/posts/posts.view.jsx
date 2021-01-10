import { Link, Button, Stack, Text, Skeleton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { monthNames } from "../../utils/statics";

export function PostsView(props) {
  return (
    <div>
      <Stack>
        {props.loading
          ? Array.from(Array(3), (e, i) => <Skeleton height="40px" mb={4} />)
          : props.posts.map((p) => (
              <Link
                as={RouterLink}
                to={`/posts/${p.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  justifyContent="flex-start"
                  width="100%"
                >
                  <Text fontSize="sm" color="gray.500" fontWeight="100" mr={4}>
                    {p.date.toDate().getDate()}{" "}
                    {monthNames[p.date.toDate().getMonth()]}
                  </Text>
                  <Text>{p.title}</Text>
                </Button>
              </Link>
            ))}
      </Stack>
    </div>
  );
}
