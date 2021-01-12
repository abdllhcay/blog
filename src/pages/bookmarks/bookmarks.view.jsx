import React, { Fragment } from "react";
import {
  AspectRatio,
  Image,
  Wrap,
  WrapItem,
  Link,
  Box,
  Text,
  Flex,
  StackDivider,
  VStack,
  Skeleton,
  Grid,
  GridItem,
} from "@chakra-ui/react";

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
          {props.bookmarks.map((item) => {
            return (
              <Flex key={item._id}>
                <Box d={["none", "block"]} mr={6} flexShrink={0} w={140}>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={item.cover}
                      alt={item.title}
                      objectFit="cover"
                    />
                  </AspectRatio>
                </Box>
                <Box flexGrow={1}>
                  <Text as="h4" fontWeight="bold" size="sm">
                    <Link href={item.link} isExternal>
                      {item.title}
                    </Link>
                  </Text>
                  <Text noOfLines={2}>{item.excerpt}</Text>
                  <Wrap spacing={0} align="center" color="gray.500">
                    <WrapItem>
                      <Text>{item.domain}</Text>
                    </WrapItem>
                    <WrapItem>
                      <Link as={Text}></Link>
                    </WrapItem>
                  </Wrap>
                </Box>
              </Flex>
            );
          })}
        </VStack>
      )}
    </div>
  );
}
