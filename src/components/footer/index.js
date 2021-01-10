import { BiBoltCircle } from "react-icons/bi";
import { Icon } from "@chakra-ui/react";

export function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        bottom: 20,
        width: "100%",
        textAlign: "center",
        fontSize: 14,
        color: "#333",
      }}
    >
      Made with <Icon as={BiBoltCircle} w={5} h={5} /> chakra-ui
    </div>
  );
}
