// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
//   useDisclosure,
//   Stack,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import style from "../Styles/Navbar.module.css";
// import resume from "../resume/utkarshResume.pdf";

// export default function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleResume = () => {
//     window.open(
//       "https://drive.google.com/file/d/10oI6FnP85JxntvrHDRGOOe885SyFXYUl/view?usp=sharing"
//     );
//   };
//   return (
//     <>
//       <Box
//          style={{backgroundColor:"#1A202C" }}
//         className={style.container}
//         id="nav-menu"
//         position="sticky"
//         top={"0px"}
//         zIndex={'2'}
//         margin={"auto"}
//         width={"100%"}
//       >
//         <Flex
//           h={16}
//           alignItems={"right"}
//           justifyContent={"right"}
//           position="relative"
//         >
//           <IconButton
//             size={"md"}
//             variant={"ghost"}
//             color="#fff"
//             icon={
//               isOpen ? (
//                 <CloseIcon w={5} h={5} />
//               ) : (
//                 <HamburgerIcon w={12} h={16} />
//               )
//             }
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//             position={"relative"}
//             left="30px"
//             zIndex={444444}
//           />
//           <HStack spacing={23} alignItems={"center"}>
//             <HStack
//               as={"nav"}
//               spacing={9}
//               display={{ base: "none", md: "flex" }}
//               color="#fff"
//               fontSize="19px"
//             >
//               <a
//                 className="nav-link about"
//                 href="#home"
//                 style={{
//                   fontSize: "23px",
//                   fontFamily: "Lobster Two cursive",
//                   fontWeight: "800",
//                   color: "#DCD7A0 ",
//                 }}
//               >
//                 Home
//               </a>

//               <a className="nav-link home" href="#about">
//                 About
//               </a>
//               <a className="nav-link skills" href="#skills">
//                 Skills
//               </a>

//               <a className="nav-link projects" href="#projects">
//                 Projects
//               </a>
         
//               <a   href="#contact">
//                Contact
//               </a>
             
//               <button
//                 id="resume-button-1"
//                 onClick={handleResume}
//                 style={{ borderRadius: "12px 20px" }}
//               >
//                 <a
//                   id="resume-link-1"
//                   href={resume}
//                   download="Utkarsh_Singhal-Resume"
                
//                   className={`${style.resumes} nav-link resume`}
//                   rel="noreferrer"
//                 >
//                   Resume
//                 </a>
//               </button>
//             </HStack>
//           </HStack>
//         </Flex>

//         {isOpen ? (
//           <Flex
//             position="relative"
//             left="230px"
//             border={"2px solid orange"}
//             bg={"#171717"}
//             justifyContent={"right"}
//             alignItems={"center"}
//             padding="10px 34px"
//             width={"40%"}
//             height="auto"
//             // borderRadius={"20px"}
//           >
//             <Box pb={1} display={{ md: "none" }}>
//               <Stack as={"nav"} spacing={4} color="#fff">
//                 <a href="#home">Home</a>
//                 <a href="#about">About</a>
//                 <a href="#skills">Skills</a>
//                 <a href="#projects">Projects</a>
//                 <a href="#contact">Contact</a>
//               </Stack>
//             </Box>
//           </Flex>
//         ) : null}
//       </Box>
//     </>
//   );
// }
import {Box,Flex,HStack} from "@chakra-ui/react";
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import style from "../Styles/Navbar.module.css";
import resume from "../resume/Utkarsh_Singhal_Resume.pdf";

export default function Navbar() {
  const handleResume = () => {
    window.open(
      
      "https://drive.google.com/file/d/14GUBJa9Cn4cSUvnzcliWR3WW76gmwMyp/view?usp=sharing"
    );
  };
  return (
    <>
      <Box className={style.container}
        id="nav-menu"
        position="sticky"
        top={"0px"}
        margin={"auto"}
        width={"100%"}
      >

          <div className={style.logoText}  >
            <h1 >Utkarsh <span className={style.logoSpan} >Singhal</span></h1>
          </div>
         

        <Flex
          h={16}
          alignItems={"right"}
          justifyContent={"right"}
          position="relative"
        >

          
          <HStack spacing={23} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={9}
              display={{ base: "none", md: "flex" }}
              color="#fff"
              fontSize="19px"
            >

          
              <a
                className="nav-link home"
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

              <a className="nav-link about" href="#about" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
                About
              </a>
              <a className="nav-link skills" href="#skills" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
                Skills
              </a>

              <a className="nav-link projects" href="#projects" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
                Projects
              </a>
         
              <a   href="#contact" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
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
                  download="Rahul-Kumar-Mishra-Resume"
                  className={`${style.resumes} nav-link resume`}
                  rel="noreferrer"
                  style={{
                    fontSize: "23px",
                    fontFamily: "Lobster Two cursive",
                    fontWeight: "800",
                
                  }}
                >
                  Resume
                </a>
              </button>
              <div></div>
            </HStack>
          </HStack>
        </Flex>

      <Menu>
             {({ isOpen }) => (
            <>
          <MenuButton isActive={isOpen}  
              variant={"ghost"}
              color="#fff"
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              position={"relative"}
              left="-10px"
              zIndex={444444} >

            {isOpen ? <h1 style={{fontSize:"30px"}}><CloseIcon/></h1> : <h1 style={{fontSize:"40px"}}><HamburgerIcon /></h1>}
          </MenuButton>

          <MenuList>
              <MenuItem><a href="#home">Home</a></MenuItem>
              <MenuItem><a href="#about">About</a></MenuItem>
              <MenuItem><a href="#skills">Skills</a></MenuItem>
              <MenuItem><a href="#projects">Projects</a></MenuItem>
              <MenuItem><a href="#contact">Contact</a></MenuItem>
              <MenuItem onClick={handleResume}><a href={resume} download="Rahul-Kumar-Mishra-Resume">Resume</a></MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  </Box>

    </>
  );
}