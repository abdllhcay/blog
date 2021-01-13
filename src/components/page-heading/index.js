import { Heading, Text } from "@chakra-ui/react";

export function PageHeading(props) {
  return (
    <div>
      <Heading size="lg" mb={3}>
        {props.title}
      </Heading>
      <Text mb={10}>{props.children}</Text>
    </div>
  );
}
