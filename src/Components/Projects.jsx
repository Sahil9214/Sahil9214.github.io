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
                <a
                  href="https://github.com/palabhi017/Meesho-Clone"
                  className="project-github-link"
                  target={"_blank"}
                >
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    outline={"transparent solid 2px"}
                    className="project-github-link"
                  >
                    {" "}
                    Github{" "}
                  </Button>
                </a>
                <a
                  style={{ marginLeft: "10px" }}
                  className="project-deployed-link"
                  href="https://vague-acoustics-7371.vercel.app/"
                  target={"_blank"}
                >
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    className="project-deployed-link"
                  >
                    deloyment
                  </Button>
                </a>{" "}
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
                <a
                  className="project-github-link"
                  href="https://github.com/pgariya/fleet-purpose-8648"
                  target={"_blank"}
                >
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    outline={"transparent solid 2px"}
                    className="project-github-link"
                  >
                    Github
                  </Button>
                </a>{" "}
                <a
                  style={{ marginLeft: "10px" }}
                  href="https://rococo-sawine-4218f1.netlify.app/"
                  target={"_blank"}
                  className="project-deployed-link"
                >
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    className="project-deployed-link"
                  >
                    deloyment
                  </Button>
                </a>{" "}
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
                <a
                  href="https://github.com/Alexfp05405/eminent-art-8078"
                  target="_blank"
                  className="project-github-link"
                >
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    className="project-github-link"
                    outline={"transparent solid 2px"}
                  >
                    Github{" "}
                    {/* <img
                      style={{ marginLeft: "7px" }}
                      src="https://user-images.githubusercontent.com/106021674/223913675-1804f62d-0f4e-480f-bf35-5906d2fe4d7b.png"
                      width="20px"
                      height="18px"
                      alt="github"
                    /> */}
                  </Button>
                </a>
                <a
                  style={{ marginLeft: "10px" }}
                  target="_blank"
                  href="https://fatsecret.vercel.app/"
                  className="project-deployed-link"
                >
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    className="project-deployed-link"
                  >
                    {" "}
                    deloyment
                    {/* <img
                      style={{ marginLeft: "7px" }}
                      src="https://user-images.githubusercontent.com/106021674/223914003-0ae735e1-be01-4c74-8988-d9679ce5d41b.png"
                      width="20px"
                      height="18px"
                      alt="deployment"
                    /> */}
                  </Button>
                </a>
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
                <a
                  href="https://github.com/Sahil9214/HindustanTime"
                  className="project-github-link"
                  target={"_blank"}
                >
                  <Button
                    variant="solid"
                    className="project-github-link"
                    colorScheme="blue"
                    outline={"transparent solid 2px"}
                  >
                    Github
                  </Button>
                </a>{" "}
                <a
                  style={{ marginLeft: "10px" }}
                  href="https://hindustan-time-ek6d.vercel.app/"
                  className="project-deployed-link"
                  target="_blank"
                >
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    className="project-deployed-link"
                  >
                    deloyment
                  </Button>
                </a>{" "}
              </Flex>
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </div>
  );
};

// export default Projects;

// import meesho from "../Images/meesho.png";

// import react from "../Images/react.png";

// //  import redux from "../../images/redux.svg";
// // import firebase from "../../images/firebase.svg";
// import chakra from "../Images/chakra-ui .svg";
// import github from "../Images/github.png";
// import style from "../Styles/Project.module.css";

// import redux from "../Images/redux.svg";

// const Projects = () => {
//   return (
//     <div id="projects" className="nav-link projects">
//       {/* Heading */}
//       <div className="headContainer1">
//         <span className="orangDash1"></span>
//         <h2 className="head1">Projects</h2>
//         <span className="orangDash1"></span>
//       </div>

//       {/* Projects */}
//       <div className="projectContainer">
//         {/* project1 */}
//         <div className="project1 project-card">
//           {/* image */}
//           <img className="project1-img" src={meesho} alt="" />
//           {/* details-div */}
//           <div className="project1-details">
//             <div>
//               <h3 className="project-title">
//                 1. OneStore Collection ( Meesho Clone ){" "}
//               </h3>
//               <span className="orangDash2"></span>
//             </div>

//             <p className="project-description">
//               OneStore is a Lifestyle Accessories Brand that curates stunning
//               designs and prints it on a wide range of personal accessories. We
//               vision to bring the things you love on the things you use.
//             </p>
//             <p>Its a collaborative project with team of 4 members.</p>

//             <div className="project-tech-stack">
//               <h4>Tech Stack :</h4>
//               <div>
//                 <svg
//                   style={{ fill: "#EB5C2B" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "#254BDD" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "#61D7F6" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
//                 </svg>
//                 {/* <img src={vercel} alt="" /> */}
//                 <img src={redux} alt="" />
//                 <img src={chakra} alt="" />
//               </div>
//             </div>

//             <div className="codebase">
//               <a
//                 className="project-github-link"
//                 href="https://github.com/palabhi017/Meesho-Clone"
//                 target="_blank"
//               >
//                 <img src={github} alt="" />
//                 <p>Codebase</p>
//               </a>
//               <a
//                 className="project-deployed-link"
//                 href="https://vague-acoustics-7371.vercel.app/"
//                 target="_blank"
//               >
//                 {/* <img src={screen} alt="" /> */}
//                 <p>Live Demo</p>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* project2 */}
//         <div className="project1 project-card">
//           {/* project2 */}
//           {/* details-div */}
//           <div className="project1-details">
//             <div>
//               <h3 className="project-title">
//                 2. Travel Advisor ( Tripadvisor Clone ){" "}
//               </h3>
//               <span className="orangDash2"></span>
//             </div>

//             <p className="project-description">
//               Traveladvisor offers online hotel reservations and bookings for
//               transportation, lodging, travel experiences, and restaurants.
//             </p>
//             <p>Its a collaborative project with team of 5 members.</p>

//             <div className="project-tech-stack">
//               <h4>Tech Stack :</h4>
//               <div>
//                 <svg
//                   style={{ fill: "#EB5C2B" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "#254BDD" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "yellow" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                 >
//                   <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
//                 </svg>
//                 <img src={chakra} alt="" />
//               </div>
//             </div>

//             <div className="codebase">
//               <a
//                 className="project-github-link"
//                 href="https://github.com/dkpradhan99/Trip_Advisor_Clone"
//                 target="_blank"
//               >
//                 <img src={github} alt="" />
//                 <p>Codebase</p>
//               </a>
//               <a
//                 className="project-deployed-link"
//                 href="https://stalwart-fox-86b96a.netlify.app/"
//                 target="_blank"
//               >
//                 {/* <img src={screen} alt="" /> */}
//                 <p>Live Demo</p>
//               </a>
//             </div>
//           </div>
//           {/* image */}
//           {/* <img className="project1-img" src={traveladvisor} alt="" /> */}
//         </div>

//         {/* project3 */}
//         <div className="project1 project-card">
//           {/* image */}
//           {/* <img className="project1-img" src={unbounce} alt="" /> */}
//           {/* details-div */}
//           <div className="project1-details">
//             <div>
//               <h3 className="project-title">3. Unbounce Website Clone </h3>
//               <span
//                 style={{ marginRight: "130px" }}
//                 className="orangDash2"
//               ></span>
//             </div>

//             <p className="project-description">
//               Unbounce helps the customers to build the landing page for their
//               website. Using AI they transform your ideas into campaigns that
//               get results.
//             </p>
//             <p>Its an Indiviual Project built in 4 days.</p>

//             <div className="project-tech-stack">
//               <h4>Tech Stack :</h4>
//               <div>
//                 <svg
//                   style={{ fill: "#EB5C2B" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "#254BDD" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "yellow" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                 >
//                   <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="codebase">
//               <a
//                 className="project-github-link"
//                 href="https://github.com/dRahul97/Unbounce-Clone"
//                 target="_blank"
//               >
//                 <img src={github} alt="" />
//                 <p>Codebase</p>
//               </a>
//               <a
//                 className="project-deployed-link"
//                 href="https://github.com/dRahul97/Unbounce-Clone"
//                 target="_blank"
//               >
//                 {/* <img src={screen} alt="" /> */}
//                 <p>Live Demo</p>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* project4 */}
//         <div className="project1 project-card">
//           {/* details-div */}
//           <div className="project1-details">
//             <div>
//               <h3 className="project-title">4. J.CREW Website Clone </h3>
//               <span
//                 style={{ marginRight: "160px" }}
//                 className="orangDash2"
//               ></span>
//             </div>

//             <p className="project-description">
//               JCREW - an international clothing brand. This project uses HTML,
//               CSS, and Javascript to showcase the functioning of an E-Commerce
//               website.
//             </p>
//             <p>Its a collaborative project with team of 5 members.</p>

//             <div className="project-tech-stack">
//               <h4>Tech Stack :</h4>
//               <div>
//                 <svg
//                   style={{ fill: "#EB5C2B" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "#254BDD" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 384 512"
//                 >
//                   <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
//                 </svg>
//                 <svg
//                   style={{ fill: "yellow" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                 >
//                   <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="codebase">
//               <a
//                 className="project-github-link"
//                 href="https://github.com/sudiptapramanik209/Jcrew-website-clone"
//                 target="_blank"
//               >
//                 <img src={github} alt="" />
//                 <p>Codebase</p>
//               </a>
//               <a
//                 className="project-deployed-link"
//                 href="https://calm-florentine-38a27c.netlify.app/"
//                 target="_blank"
//               >
//                 {/* <img src={screen} alt="" /> */}
//                 <p>Live Demo</p>
//               </a>
//             </div>
//           </div>
//           {/* image */}
//           {/* <img className="project1-img" src={jcrew} alt="" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Projects;
