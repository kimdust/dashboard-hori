import { Box, Flex, Text } from "@chakra-ui/react";
import ContainerLg from "./Container";

const Footer = () => {
  return (
    <Box
      as="footer"
      h={20}
      bg={"bgDefault"}
      display={"flex"}
      flexDir={"row"}
      alignItems={"center"}
      pl={{ base: "12px", xl: "332px" }}
      pr={{ base: "12px", xl: "32px" }}
      justifyContent={"space-between"}
    >
      <Flex fontWeight={500} color={"#A0AEC0"}>
        <Box>
          © 2024 Horizon UI. All Rights Reserved. Made with love by Simmmple!
        </Box>
      </Flex>
      <Flex gap={"20px"} fontWeight={400} color={"#A0AEC0"}>
        <Text>Support</Text>
        <Text>License</Text>
        <Text>Terms of Use</Text>
        <Text>Blog</Text>
      </Flex>
    </Box>
  );
};
export default Footer;
