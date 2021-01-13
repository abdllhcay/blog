import {
  AspectRatio,
  Image,
  Wrap,
  WrapItem,
  Link,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

export function BookmarkItem(props) {
  return (
    <Flex key={props.bookmark._id}>
      <Box d={["none", "block"]} mr={6} flexShrink={0} w={140}>
        <AspectRatio ratio={4 / 3}>
          <Image
            src={props.bookmark.cover}
            alt={props.bookmark.title}
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Box flexGrow={1}>
        <Text as="h4" fontWeight="bold" size="sm">
          <Link href={props.bookmark.link} isExternal>
            {props.bookmark.title}
          </Link>
        </Text>
        <Text noOfLines={2}>{props.bookmark.excerpt}</Text>
        <Wrap spacing={0} align="center" color="gray.500">
          <WrapItem>
            <Text>{props.bookmark.domain}</Text>
          </WrapItem>
          <WrapItem>
            <Link as={Text}></Link>
          </WrapItem>
        </Wrap>
      </Box>
    </Flex>
  );
}
