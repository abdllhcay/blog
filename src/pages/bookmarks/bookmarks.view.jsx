import React, { Fragment } from "react";
import {
  StackDivider,
  VStack,
  Skeleton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BookmarkItem } from "../../components/bookmark-item";

export function BookmarksView(props) {
  return (
    <div>
      {props.loading ? (
        <Fragment>
          {Array.from(Array(3), (e, i) => (
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
          ))}
        </Fragment>
      ) : (
        <VStack mt={20} spacing={6} align="stretch" divider={<StackDivider />}>
          {props.bookmarks.map((item) => (
            <BookmarkItem bookmark={item} />
          ))}
        </VStack>
      )}
    </div>
  );
}
