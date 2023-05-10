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

            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/palabhi017/Meesho-Clone"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  {" "}
                  Github{" "}
                </Button>
              </Link>
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://vague-acoustics-7371.vercel.app/"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  deloyment
                </Button>
              </Link>{" "}
            </Flex>
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

            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/pgariya/fleet-purpose-8648"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  Github
                </Button>
              </Link>{" "}
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://rococo-sawine-4218f1.netlify.app/"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  deloyment
                </Button>
              </Link>{" "}
            </Flex>
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

            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Alexfp05405/eminent-art-8078"
                target="_blank"
              >
                <Button colorScheme="blue" solid>
                  Github{" "}
                </Button>
              </Link>
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                target="_blank"
                href="https://fatsecret.vercel.app/"
              >
                <Button colorScheme="blue" solid>
                  {" "}
                  deloyment
                </Button>
              </Link>
            </Flex>
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

            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Sahil9214/HindustanTime"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  Github
                </Button>
              </Link>{" "}
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://hindustan-time-ek6d.vercel.app/"
                target="_blank"
              >
                <Button colorScheme="blue" solid>
                  deloyment
                </Button>
              </Link>{" "}
            </Flex>
          </Card>
        </Flex>
      </Box>
    </div>
  );
};

export default Projects;
