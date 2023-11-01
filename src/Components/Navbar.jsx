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
      "https://drive.google.com/file/d/10oI6FnP85JxntvrHDRGOOe885SyFXYUl/view?usp=sharing"
    );
  };
  return (
    <>
      <Box
         style={{backgroundColor:"#1A202C" }}
        className='navbarBox'
        id="nav-menu"
        position="sticky"
        top={"0px"}
        zIndex={'2'}
        margin={"auto"}
        width={"100%"}
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
          <HStack spacing={23} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={9}
              display={{ base: "none", md: "flex" }}
              color="#fff"
              fontSize="19px"
            >
              <a
                className="nav-link about"
                href="#home"
                style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}
              >
                Home
              </a>

              <a className="nav-link home" href="#about">
                About
              </a>
              <a className="nav-link skills" href="#skills">
                Skills
              </a>

              <a className="nav-link projects" href="#projects">
                Projects
              </a>
         
              <a   href="#contact">
               Contact
              </a>
             
              <button
                id="resume-button-1"
                onClick={handleResume}
                style={{ borderRadius: "12px 20px" }}
              >
                <a
                  id="resume-link-1"
                  href={resume}
                  download="Utkarsh_Singhal-Resume"
                
                  className={`${style.resumes} nav-link resume`}
                  rel="noreferrer"
                >
                  Resume
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
