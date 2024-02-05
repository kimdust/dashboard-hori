import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import gsap from "gsap";

const Header = () => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const hd = document.getElementById("header");
    const navBar = document.getElementById("nav-bar");
    const navBelt = document.getElementById("nav-belt");
    const hdHeight = hd.offsetHeight;
    const swiperHeight = document.querySelector(".mySwiper").offsetHeight;

    if (scrollY > swiperHeight - hdHeight) {
      gsap.to(navBar, { backgroundColor: "#fff", duration: 0.5 });
      gsap.to(navBelt, { backgroundColor: "#f6f7f8", duration: 0.5 });
      gsap.to(navBelt.querySelectorAll("Button"), {
        color: "#000",
        duration: 0.5,
      });
    } else {
      gsap.to(navBar, { backgroundColor: "", duration: 0.5 });
      gsap.to(navBelt, { backgroundColor: "", duration: 0.5 });
      gsap.to(navBelt.querySelectorAll("Button"), {
        color: "",
        duration: 0.5,
      });
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <Box
      as="header"
      id="header"
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="rgba(0,0,0,.1)"
      backdropFilter={"saturate(180%) blur(15px)"}
    >
      {/* tab */}
      <Box
        id="nav-belt"
        display={["none", null, null, null, "block"]}
        h={"32px"}
        bg={"rgba(0,0,0,.6)"}
      >
        <Container
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <ButtonGroup gap={"10px"}>
            <Button colorScheme="teal" variant="link12">
              공공 기관용
            </Button>
            <Button colorScheme="teal" variant="link12">
              금융 클라우드
            </Button>
          </ButtonGroup>
          <ButtonGroup gap={"10px"}>
            <Button colorScheme="teal" variant="link12">
              로그인
            </Button>
            <Button colorScheme="teal" variant="link12">
              회원가입
            </Button>
            <Button colorScheme="teal" variant="link12">
              Languages
            </Button>
          </ButtonGroup>
        </Container>
      </Box>
      {/* header */}
      <Box id="nav-bar" bg={"rgba(0,0,0,.05)"}>
        <Container
          display={"flex"}
          h={"60px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading as={"h1"} fontSize={24}>
            <Link to="/">Dashboard</Link>
          </Heading>

          <Gnb />
          <ButtonGroup>
            <IconButton
              variant="ghost"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
            <IconButton
              variant="ghost"
              aria-label="Light database"
              icon={<SunIcon />}
            />
            <IconButton
              variant="ghost"
              aria-label="전체 메뉴"
              icon={<HamburgerIcon />}
              display={{ sm: "block", lg: "none" }}
            />
          </ButtonGroup>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
