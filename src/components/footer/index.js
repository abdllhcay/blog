import { Link, Icon } from "@chakra-ui/react";
import { BiBoltCircle } from "react-icons/bi";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      Made with <Icon as={BiBoltCircle} w={5} h={5} />{" "}
      <Link href="https://chakra-ui.com" isExternal>
        chakra-ui
      </Link>
    </div>
  );
}
