import { Link, Button, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { shortMonthNames } from "../../utils/statics";

export function PostLink(props) {
  return (
    <Link
      as={RouterLink}
      to={`/posts/${props.post.id}`}
      style={{ textDecoration: "none" }}
    >
      <Button
        size="lg"
        variant="ghost"
        justifyContent="flex-start"
        width="100%"
      >
        <Text fontSize="sm" color="gray.500" fontWeight="100" mr={4}>
          {props.post.date.toDate().getDate()}{" "}
          {shortMonthNames[props.post.date.toDate().getMonth()]}
        </Text>
        <Text>{props.post.title}</Text>
      </Button>
    </Link>
  );
}
