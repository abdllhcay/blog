import {
  Button,
  Stack,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

export function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Stack direction="row" align="center">
      <Button colorScheme="teal" variant="ghost">
        abdllhcay
      </Button>
      <Spacer />
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
        onClick={toggleColorMode}
        aria-label="Night mode"
        colorScheme="teal"
        variant="ghost"
        icon={<MoonIcon />}
      />
    </Stack>
  );
}
