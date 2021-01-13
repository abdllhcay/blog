import { Fragment } from "react";
import { Skeleton } from "@chakra-ui/react";

export function PostSkeleton(props) {
  return props.loading ? (
    Array.from(Array(3), (e, i) => <Skeleton height="40px" mb={4} />)
  ) : (
    <Fragment />
  );
}
