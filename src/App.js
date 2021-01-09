import {
  Heading,
  Container,
  Button,
  Stack,
  IconButton,
  Avatar,
  Text,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      <Container maxW="2xl" mt={5} centerContent>
        <Stack direction="row" align="center">
          {/* <Button colorScheme="teal" variant="ghost">
            <Avatar
              name="abdllhcay"
              src="https://avatars3.githubusercontent.com/u/29143550?s=460&u=19e82a13f6e3a7350d56bc1848b4d7f9337430d8&v=4"
              size="sm"
              mr={2}
            />{" "}
            abdllhcay
          </Button> */}
          {/* <Spacer /> */}
          <Button colorScheme="teal" variant="ghost">
            Yazılarım
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Hakkımda
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Yer İmleri
          </Button>
          <IconButton
            aria-label="Night mode"
            colorScheme="teal"
            variant="ghost"
            icon={<MoonIcon />}
          />
        </Stack>
        {/* <Heading as="h3" size="lg">
        Son Yazılar
      </Heading> */}
      </Container>
      <Container maxW="6xl" mt={20} centerContent>
        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
      </Container>
    </div>
  );
}

export default App;
