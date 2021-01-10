import {
  Button,
  Stack,
  IconButton,
  Spacer,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Stack direction="row" align="center">
      <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
        <Button colorScheme="teal" variant="ghost">
          abdllhcay
        </Button>
      </Link>
      <Spacer />
      <Link as={RouterLink} to="/posts" style={{ textDecoration: "none" }}>
        <Button colorScheme="teal" variant="ghost">
          Yazılarım
        </Button>
      </Link>
      <Link as={RouterLink} to="/about-me" style={{ textDecoration: "none" }}>
        <Button colorScheme="teal" variant="ghost">
          Hakkımda
        </Button>
      </Link>
      <Link as={RouterLink} to="/bookmarks" style={{ textDecoration: "none" }}>
        <Button colorScheme="teal" variant="ghost">
          Yer İmleri
        </Button>
      </Link>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Night mode"
        colorScheme="teal"
        variant="ghost"
        icon={<MoonIcon />}
      />
    </Stack>
  );
}
