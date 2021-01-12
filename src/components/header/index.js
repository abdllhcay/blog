import React, { Fragment } from "react";
import {
  Button,
  Stack,
  IconButton,
  Spacer,
  useColorMode,
  Link,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { isLoggedIn, removeCurrentUser } from "../../utils/user";

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
      {isLoggedIn() ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Admin
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link
                as={RouterLink}
                to="/posts/new"
                style={{ textDecoration: "none" }}
              >
                Yeni Yazı
              </Link>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={removeCurrentUser}>Çıkış</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Fragment></Fragment>
      )}
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
