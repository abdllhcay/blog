import { IconButton, Link, Icon, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export function AboutMeView() {
  return (
    <div>
      <p>
        Merhaba, ben Abdullah. Kişisel makalelerimi yayınladığım ve biraz da
        sizi hiç ilgilendirmeyen şeylerden bahsettiğim bloguma hoşgeldiniz.
        Maksat insanlara bir faydamız dokunsun ;) [Bir yazılımcı atasözü]
      </p>
      <Stack direction="row" mt={5}>
        <Link href="https://www.linkedin.com/in/abdullahcay/" isExternal>
          <IconButton
            colorScheme="teal"
            variant="ghost"
            icon={<Icon as={FaLinkedin} w={8} h={8} />}
          />
        </Link>
        <Link href="https://github.com/abdllhcay" isExternal>
          <IconButton
            colorScheme="teal"
            variant="ghost"
            icon={<Icon as={FaGithub} w={8} h={8} />}
          />
        </Link>
        <Link href="https://medium.com/@abdllhcay" isExternal>
          <IconButton
            colorScheme="teal"
            variant="ghost"
            icon={<Icon as={FaMedium} w={8} h={8} />}
          />
        </Link>
      </Stack>
    </div>
  );
}
