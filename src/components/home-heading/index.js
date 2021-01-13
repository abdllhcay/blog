import { Heading } from "@chakra-ui/react";

export function HomeHeading(props) {
  return (
    <Heading size="lg" ml={5} mb={3}>
      {props.children}
    </Heading>
  );
}
