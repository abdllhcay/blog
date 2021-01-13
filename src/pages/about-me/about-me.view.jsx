import { IconButton, Link, Icon, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { PageHeading } from "../../components/page-heading";

export function AboutMeView() {
  return (
    <div>
      <PageHeading title="Hakkımda">Yazılımcı, mahluk, sıkılmış</PageHeading>
      <p>
        Merhaba, ben Abdullah. Kişisel makalelerimi yayınladığım ve biraz da
        ondan bundan bahsettiğim bloguma hoşgeldiniz. Maksat insanlara bir
        faydamız dokunsun ;)
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
