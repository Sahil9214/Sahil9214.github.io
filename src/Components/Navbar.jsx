import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import style from "../Styles/Navbar.module.css";
import resume from "../resume/utkarshResume.pdf";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1WndJReS9UjQ1N1W9L-NB53CbCtrFRbmp/view?usp=sharing"
    );
  };
  return (
    <>
      <Box
        style={{ width: "100%", backgroundColor: "#393e46", zIndex: "2" }}
        id="nav-menu"
        position="sticky"
        top={"0px"}
        margin={"auto"}
        // pt={9}
      >
        <Flex
          h={16}
          alignItems={"right"}
          justifyContent={"right"}
          position="relative"
        >
          <IconButton
            size={"md"}
            variant={"ghost"}
            color="#fff"
            icon={
              isOpen ? (
                <CloseIcon w={5} h={5} />
              ) : (
                <HamburgerIcon w={12} h={16} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            position={"relative"}
            left="30px"
            zIndex={444444}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={9}
              display={{ base: "none", md: "flex" }}
              color="#fff"
              fontSize="17px"
            >
              <a className={style.Navbar_Text} href="#home">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>

              <button id="resume-button-1" onClick={handleResume}>
                <a
                  id="resume-link-1"
                  href={resume}
                  download="Rahul-Dudka-Resume"
                  target="_blank"
                  className={`${style.resumes} nav-link resume`}
                  rel="noreferrer"
                >
                  Resume <i className="fa">&#xf019;</i>
                </a>
              </button>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Flex
            position="relative"
            left="230px"
            border={"2px solid orange"}
            bg={"#171717"}
            justifyContent={"right"}
            alignItems={"center"}
            padding="10px 34px"
            width={"40%"}
            height="auto"
            // borderRadius={"20px"}
          >
            <Box pb={1} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4} color="#fff">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </Stack>
            </Box>
          </Flex>
        ) : null}
      </Box>
    </>
  );
}
