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
import Utkarsh from "../Images/Utkarsh.png"
const AboutMe = () => {
  return (
    <Box style={{ marginTop: "20px" }} id="about" className="about section">
      <Text className="about_me_heading">About Me</Text>
      <br />
      <Divider width={"80%"} margin={"auto"} />
      <br />
      <Flex className="block" style={{margin:"auto",width:"80%"}}>
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
              Hello <span>!</span> I Am <span style={{color:"red",fontWeight:"800"}} >Utkarsh Singhal</span>
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
            href="https://drive.google.com/file/d/10oI6FnP85JxntvrHDRGOOe885SyFXYUl/view?usp=sharing"
            download
          >
            {" "}
            <Button className="resume_Btn" id="resume-link-1"    >
              Resume{" "}
              <Image  id="resume-button-2"
                width={"30px"}
                src="https://user-images.githubusercontent.com/106021674/222917402-ed1d5989-90f3-45aa-9baa-26e3e2ca7699.png"
              />
            </Button>
          </a>
        </Box>
        <Box className="mainBox2">
         <Image className="home-img"     src={Utkarsh} alt="Image"/>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
// // <svg
// version="1.1"
// xmlns="http://www.w3.org/2000/svg"
// viewBox="0 0 500 500"
// width="100%"
// id="blobSvg"
// style={{ opacity: "1" }}
// filter="blur(qs19px)"
// transform="rotate(qs103)"
// >
// <image
// style={{position:"relative",zIndex:"2"}}
//   x="0"
//   y="0"
//   width="100%"
//   height="100%"
//   clip-path="url(#shape)"
//   href="https://user-images.githubusercontent.com/106021674/222173822-d813d627-b33e-499d-89b4-ac7209c12307.jpg"
//   preserveAspectRatio="none"
// ></image>{" "}
// <defs>
//   {" "}
//   <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//     {" "}
//     <stop
//       offset="0%"
//       style={{ stopColor: "rgb(221, 178, 120)" }}
//     ></stop>{" "}
//     <stop
//       offset="100%"
//       style={{ stopColor: "rgb(137, 16, 70)" }}
//     ></stop>{" "}
//   </linearGradient>{" "}
// </defs>{" "}
// <clipPath id="shape">
//   <path id="blob" fill="url(#gradient)">
//     {" "}
//     <animate
//       attributeName="d"
//       dur="4200ms"
//       repeatCount="indefinite"
//       values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
//     ></animate>{" "}
//   </path>
// </clipPath>
// </svg>