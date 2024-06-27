import React from "react";
import { Box, Text, Heading, Image, Divider } from "@chakra-ui/react";
import "../Styles/TechnicalSkills.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const TechnicalSkills = () => {
  return (
    <div id="skills">
      <br />
      <br />
      <br />
      <br />
      <Box className="techBox1">
        <Text className="tech_text_size">Technical Skills</Text>

        <Divider width={"80%"} margin="auto" />
        <br />
      </Box>
      <Box className="techBox">
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224761877-2d73c19c-ba53-4730-8257-8478a0daff9c.png"
            alt="html"
          />
          <Text className="skills-card-name">HTML</Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224762373-cebb4e19-d4ee-4880-8de6-17fcb40d3789.png"
            alt="css"
          />
          <Text className="skills-card-name">HTML</Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224762582-e1c37065-e3f0-490e-8de9-53279cb49ad4.png"
            alt="js"
          />
          <Text className="skills-card-name"></Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224763338-498f7024-2492-4400-8ab9-f063ea404e85.png"
            alt="typescript"
          />
          <Text className="skills-card-name">HTML</Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224763821-e05a9c0a-c2df-4920-aa16-55f8cac32cc5.png"
            alt="React"
          />
          <Text className="skills-card-name"></Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://as1.ftcdn.net/v2/jpg/00/62/57/34/1000_F_62573467_9ssewgM2Jw6FJh8u6asekeXLP7s94Qw4.jpg"
            alt="node"
          />
          <Text className="skills-card-name"></Text>
        </Box>
      </Box>
      <br />
      <br />
      <Box className="techBox">
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"
            alt="chakra"
          />
          <Text className="skills-card-name"></Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
            alt="mongoDB"
          />
          <Text className="skills-card-name"></Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="data:image/png;base64,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"
            alt="netlify"
          />
          <Text className="skills-card-name"></Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png"
            alt="express"
          />
          <Text className="skills-card-name"></Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
            alt="vercel"
          />
          <Text className="skills-card-name"></Text>
        </Box>
        <br />
      </Box>
    </div>
  );
};

export default TechnicalSkills;
