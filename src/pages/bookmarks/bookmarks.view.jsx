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
  Stack,
} from "@chakra-ui/react";

export function BookmarksView(props) {
  return (
    <div>
      {props.loading ? (
        <Fragment>
          <Stack direction="row">
            <Skeleton height="100px" width="20%" />
            <Skeleton height="30px" width="100%" />
          </Stack>
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
