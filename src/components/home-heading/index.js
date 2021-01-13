import { Heading } from "@chakra-ui/react";

export function HomeHeading(props) {
  return (
    <Heading size="md" mb={3}>
      {props.children}
    </Heading>
  );
}
