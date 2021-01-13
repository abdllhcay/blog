import { Fragment } from "react";
import { Skeleton, Grid, GridItem } from "@chakra-ui/react";

export function BookmarkSkeleton(props) {
  return props.loading ? (
    Array.from(Array(3), (e, i) => (
      <Grid
        h="100px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        mb={5}
      >
        <GridItem rowSpan={2}>
          <Skeleton height="100%" width="100%" />
        </GridItem>
        <GridItem colSpan={2}>
          <Skeleton height="30px" width="100%" />
        </GridItem>
        <GridItem colSpan={2}>
          <Skeleton height="30px" width="50%" />
        </GridItem>
      </Grid>
    ))
  ) : (
    <Fragment />
  );
}
