import React from "react";
import {
  Text,
  Box,
  Flex,
  Divider,
  CardBody,
  Image,
  Button,
  Heading,
  Stack,
  Card,
  Link,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";

import "../Styles/Project.css";
const Projects = () => {
  return (
    <div id="projects">
      <Text className="Project_Text">Projects</Text>
      <br />
      <Divider width={"80%"} margin="auto" />
      <br />
      <br />
      <Box style={{ width: "90%", margin: "auto" }} className="boxFlexupper">
        <Flex className="flexBox1">
          {/* Card 1 here */}
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://user-images.githubusercontent.com/106021674/223912938-e37d0f04-b65e-480f-831e-66bcecd9fe43.png"
                alt="Meeshow.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  Meeshow.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  Meesho is India's largest and most trusted marketplace for
                  Resellers, who sell products online through WhatsApp and
                  Facebook
                </Text>
                <Text color="blue.600" fontSize="2xl"></Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <span
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Collaborative
              </span>
              <br />
              <br />

              <Box style={{ gap: "10px" }}>
                <Box className="tech_used_span" style={{ gap: "10px" }}>
                  <span className="tech_used_span1">CSS</span>

                  <span className="tech_used_span2"> HTML</span>

                  <span className="tech_used_span4">API</span>
                  <br />
                  <br />
                  <span className="tech_used_span5">JavaScript</span>

                  <span className="tech_used_span7">Cylic deployment</span>
                  <span className="tech_used_span8">Json-Server</span>
                </Box>
              </Box>
            </Box>

            <CardFooter>
              <Flex spacing="2">
              <Box className="project-deployed-link">
                  <Link
                    
                    href="https://vague-acoustics-7371.vercel.app/"
                    target={"_blank"}
                  >
                    <Button variant="solid" colorScheme="blue">
                      deloyment
                    </Button>
                  </Link>{" "}
                </Box>
                <Box className="project-github-link">
                  <Link  style={{ marginLeft: "10px" }}
                    className="project-github-link"
                    href="https://github.com/palabhi017/Meesho-Clone"
                    target={"_blank"}
                  >
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      outline={"transparent solid 2px"}
                    >
                      {" "}
                      Github{" "}
                    </Button>
                  </Link>
                </Box>
                
              </Flex>
            </CardFooter>
          </Card>
          {/* card 2 */}
          <br />
          <br />
          <br />

          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://user-images.githubusercontent.com/106021674/223922963-3c2f54eb-09ac-407b-889e-18234e024863.png"
                alt="Meeshow.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  IKEA.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  Furniture, home accessories, design ideas and inspiration for
                  big dreams and small budgets. A better everyday life begins at
                  home!
                </Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <span
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Collaborative
              </span>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <span className="tech_used_span1">CSS</span>

                <span className="tech_used_span2"> React</span>
                <span className="tech_used_span3">Redux</span>
                <span className="tech_used_span4">Chakra-Ui</span>
                <br />
                <br />
                <span className="tech_used_span5">JavaScript</span>

                <span className="tech_used_span7">Cylic deployment</span>
                <span className="tech_used_span8">Json-Server</span>
              </Box>
            </Box>

            <CardFooter>
              <Flex spacing="2">
              <Box className="project-deployed-link">
                  <Link
                  
                    href="https://rococo-sawine-4218f1.netlify.app/"
                    target={"_blank"}
                  >
                    <Button variant="solid" colorScheme="blue">
                      deloyment
                    </Button>
                  </Link>{" "}
                </Box>
                <Box  className="project-github-link"  >
                  <Link  style={{ marginLeft: "10px" }}
                    className="project-github-link"
                    href="https://github.com/pgariya/fleet-purpose-8648"
                    target={"_blank"}
                  >
                    <Button  className="project-github-link"
                      variant="solid"
                      colorScheme="blue"
                      outline={"transparent solid 2px"}
                    >
                      Github
                    </Button>
                  </Link>{" "}
                </Box>
               
              </Flex>
            </CardFooter>
          </Card>
        </Flex>
        {/* FlexBox2 */}
        <br />
        <br />
        <br />
        <Flex justifyContent={"space-evenly"} className="flexBox2">
          {/* Card 1 here */}
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://user-images.githubusercontent.com/106021674/223928574-93045280-292b-444e-b445-e350c505d15b.png"
                alt="TrackingTime.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  TrackingTime.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  A time tracker with additional workforce management features
                  that will help you develop a high-performing team that smashes
                  goals every time.
                </Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <span
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Collaborative
              </span>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <span className="tech_used_span1">CSS</span>

                <span className="tech_used_span3">HTML</span>

                <span className="tech_used_span5">JavaScript</span>
                <br />
                <br />
                <span className="tech_used_span7">Netlify</span>
                <span className="tech_used_span8">Json-Server</span>
              </Box>
            </Box>

            <CardFooter>
              <Flex spacing="2">
              <Box className="project-deployed-link">
                  <Link
                    style={{ marginLeft: "10px" }}
                    target="_blank"
                    href="https://fatsecret.vercel.app/"
                  >
                    <Button variant="solid" colorScheme="blue">
                      {" "}
                      deloyment
                    </Button>
                  </Link>
                </Box>
                <Box    className="project-github-link"  >
                  <Link  style={{ marginLeft: "10px" }}
                    className="project-github-link"
                    href="https://github.com/Alexfp05405/eminent-art-8078"
                    target="_blank"
                  >
                    <Button  className="project-github-link"
                      variant="solid"
                      colorScheme="blue"
                      outline={"transparent solid 2px"}
                    >
                      Github{" "}
                    </Button>
                  </Link>
                </Box>
               
              </Flex>
            </CardFooter>
          </Card>
          {/* card 2 */}
          <br />
          <br />
          <br />
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://user-images.githubusercontent.com/106021674/223926712-ed696e8f-7ab0-40f1-bf9c-9fdbcd176832.png"
                alt="Meeshow.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: "Lobster Two, cursive" }}
                  size="md"
                >
                  Hindustan.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  Hindustan Times is an Indian English-language daily newspaper
                  based in Delhi. It is the flagship publication of HT Media, an
                  entity controlled by the K. K. Birla family, and is owned by
                  Shobhana Bhartia.[2]
                </Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <span
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Collaborative
              </span>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <span className="tech_used_span1">CSS</span>

                <span className="tech_used_span2"> HTML</span>

                <span className="tech_used_span4">API</span>
                <br />
                <br />
                <span className="tech_used_span5">JavaScript</span>

                <span className="tech_used_span7">Cylic deployment</span>
                <span className="tech_used_span8">Json-Server</span>
              </Box>
            </Box>

            <CardFooter>
              <Flex spacing="2">
              <Box className="project-deployed-link">
                  <Link
                 
                    href="https://hindustan-time-ek6d.vercel.app/"
                    target="_blank"
                  >
                    <Button variant="solid" colorScheme="blue">
                      deloyment
                    </Button>
                  </Link>{" "}
                </Box>
                <Box    className="project-github-link"  >
                  <Link  style={{ marginLeft: "10px" }}
                    className="project-github-link"
                    href="https://github.com/Sahil9214/HindustanTime"
                    target={"_blank"}
                  >
                    <Button   className="project-github-link"
                      variant="solid"
                      colorScheme="blue"
                      outline={"transparent solid 2px"}
                    >
                      Github
                    </Button>
                  </Link>{" "}
                </Box>
               
              </Flex>
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </div>
  );
};

export default Projects;

// export default Projects;
// import React from "react";
// import Ikea from "../Images/Ikea.png"
// import Meesho from "../Images/meesho.png"
// import { SiNetlify } from "react-icons/si";
// import Hindustan from '../Images/Hindustan.png'
// import Tracking from "../Images/Tracking.png"
// import { AiFillGithub } from "react-icons/ai";

// const Projects = () => {
//   return (
//     <div id="projects" style={{border:"9px solid red"}}>
//       <section >
//         <div className="main-text">
//           <h2>
//             <span>Latest </span>Projects
//           </h2>
//         </div>

//         <div className="nav-link projects" id="nav-link-projects">
//           <div className="project-card">
//             <img src={Meesho} alt="" />
//             <div className="layer">
//               <h5 className="project-title">Apple.com</h5>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   fontWeight: "500",
//                   lineHeight: "1.5",
//                 }}
//                 className="project-description">
//                 Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers.
//               </p>
//               <p className="project-tech-stack">
//                 Tech-Stack : REACT, JS, HTML, CSS, Chakra
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   marginTop: "-1.1rem",
//                   gap: "1rem",
//                 }}>
//                 <div className="project-deployed-link">
//                   <a
//                     href="https://matrix-opal.vercel.app/"
//                     target="_blank">
//                     <i>
//                       <SiNetlify />
//                     </i>
//                   </a>
//                 </div>
//                 <div >
//                   <a
//                     href="https://github.com/Sagarbisht07/Perpetual-fact-6008"
//                     target="_blank"
//                     id="project-deployed-link">
//                     <i>
//                       <AiFillGithub />
//                     </i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="project-card">
//             <img src={Ikea} alt="" />
//             <div className="layer">
//               <h5 className="project-title">WardrobeWorld</h5>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   fontWeight: "500",
//                   lineHeight: "1.5",
//                 }}
//                 className="project-description">
//                WardrobeWorld is an e-commerce website where people can buy from wide range of products and has an interactive UI. We are a one stop shop for all your fashion and lifestyle needs.
//               </p>
//               <p className="project-tech-stack">
//                 Tech-Stack : REACT, JS, HTML, CSS, Chakra
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   marginTop: "-1.1rem",
//                   gap: "1rem",
//                 }}>
//                 <div className="project-deployed-link">
//                   <a
//                     href="https://wardrobe-world.vercel.app/"
//                     target="_blank">
//                     <i>
//                       <SiNetlify />
//                     </i>
//                   </a>
//                 </div>
//                 <div >
//                   <a
//                     href="https://github.com/Sagarbisht07/crabby-whistle-3208"
//                     target="_blank"
//                     id="project-deployed-link">
//                     <i>
//                       <AiFillGithub />
//                     </i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="project-card">
//             <img src={Tracking} alt="" />
//             <div className="layer">
//               <h5 className="project-title">CodePen</h5>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   fontWeight: "500",
//                   lineHeight: "1.5",
//                 }}
//                 className="project-description">
//                 CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets.
//               </p>
//               <p className="project-tech-stack">
//                 Tech-Stack : REACT, JS, HTML, CSS, Chakra
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   marginTop: "-1.1rem",
//                   gap: "1rem",
//                 }}>
//                 <div className="project-deployed-link">
//                   <a
//                     href="https://precious-blini-afdd2e.netlify.app/"
//                     target="_blank">
//                     <i>
//                       <SiNetlify />
//                     </i>
//                   </a>
//                 </div>
//                 <div className="project-github-link">
//                   <a
//                     href="https://github.com/Sagarbisht07/Code-Editior"
//                     target="_blank"
//                     id="project-deployed-link">
//                     <i>
//                       <AiFillGithub />
//                     </i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="project-card">
//             <img src={Hindustan} alt="" />
//             <div className="layer">
//               <h5 className="project-title">outfitr.com</h5>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   fontWeight: "500",
//                   lineHeight: "1.5",
//                 }}
//                 className="project-description">
//                   Outfitr is an e-commerce website where people can buy from wide range of products and has an interactive UI. We are a one stop shop for all your fashion and lifestyle needs.
//               </p>
//               <p className="project-tech-stack">
//                 Tech-Stack : REACT, JS, HTML, CSS, Chakra
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   marginTop: "-1.1rem",
//                   gap: "1rem",
//                 }}>
//                 <div className="project-deployed-link">
//                   <a
//                     href="https://outfiter.vercel.app/"
//                     target="_blank">
//                     <i>
//                       <SiNetlify />
//                     </i>
//                   </a>
//                 </div>
//                 <div className="project-github-link">
//                   <a
//                     href="https://github.com/Sagarbisht07/shrill-yam-9521"
//                     target="_blank"
//                     id="project-deployed-link">
//                     <i>
//                       <AiFillGithub />
//                     </i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;
