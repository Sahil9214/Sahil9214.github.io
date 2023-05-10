import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import "../Styles/AboutMe.css";
import Utkarsh from "../Images/Utkarsh.png";
import resume from "../resume/utkarshResume.pdf";
const AboutMe = () => {
  return (
    <Box style={{ marginTop: "20px" }} className="about section" id="home">
      <br />
      <Flex className="block" style={{ margin: "auto", width: "80%" }}>
        <Box className="mainBox1" width={"70%"}>
          <Box
            style={{
              width: "100%",
              margin: "auto",

              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Text className="name_Text" id="user-detail-name">
              Hello <span>!</span> I Am{" "}
              <span style={{ color: "red", fontWeight: "800" }}>
                Utkarsh Singhal
              </span>
              <br /> Full Stack web developer
              <br /> 👋👋
            </Text>
            <Text>
              <p id="user-detail-intro" className="aboutME_p" style={{}}>
                A self-motivated hard-working and ambitious Full Stack Web
                Developer with proficiency in HTML,CSS,JavaScript and
                React.Problem-solving mindset and ability to perform well in
                collaboration hours of coding and hands-on experience in
                developing 4 fully functioning projects. 100+hour of holistics
                development which help in developing about 40 mini
                projects.Looking forward to work as accountable and competent
                employee in a tech company
              </p>
            </Text>
          </Box>
          <br />
          <a
            id="resume-button-2"
            href="https://drive.google.com/file/d/10oI6FnP85JxntvrHDRGOOe885SyFXYUl/view?usp=sharing"
            download={"Utkarsh_Singhal_Resume"}
            target="_blank"
          >
            {" "}
            <Button className="resume_Btn" id="resume-link-1">
              Resume{" "}
              <Image
                width={"30px"}
                src="https://user-images.githubusercontent.com/106021674/222917402-ed1d5989-90f3-45aa-9baa-26e3e2ca7699.png"
              />
            </Button>
          </a>
        </Box>
        <Box className="mainBox2">
          <Image className="home-img" src={Utkarsh} alt="Image" />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
