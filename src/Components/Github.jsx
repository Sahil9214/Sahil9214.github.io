import React from "react";
import { Text, Heading, Box, Flex, Image, Divider } from "@chakra-ui/react";
import "../Styles/Github.css";
const Github = () => {
  return (
    <div>
      <Text className="github_contribution">GITHUB CONTRIBUTION</Text>
      <br />
      <Divider width={"80%"} margin={"auto"} />
      <br />
      <Box className="Image_Section" id="github-streak-stats">
        <Image
          className="githubImages"
          w={"100%"}
          src="https://user-images.githubusercontent.com/106021674/222918636-c76f3c23-0e55-472b-9bb8-371e0d35bc59.png"
          alt="github"
        />
      </Box>
      <br />
      <br />
      <Box className="Image_Section">
        <Flex>
          {/* <Image width={"50%"} 
            src="https://camo.githubusercontent.com/4d1789d79a2144f3da054e10a1e56584382cb8561078fa21e9a2eb2dce7b3e57/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d736168696c393231342673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            alt="git"
          /> */}

          <Image id="github-top-langs"
            width={"50%"}
            className="githubImages"
            src="https://camo.githubusercontent.com/4f4ad793fa559a7b780af80e73579ff51e6b40ed6c8cff4368ba62c8c6ae1c9f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d736168696c393231342673686f775f69636f6e733d74727565266c6f63616c653d656e"
            alt="git"
          />
        </Flex>
      </Box>
      <br />
      <br />
      <Box className="Image_Section">
        <Image id="github-stats-card"
          className="githubImages"
          w={"70%"}
          src="https://camo.githubusercontent.com/5bf0ce40ce33b017173dba7f84078666d4014009631652611b25b355dfbb7539/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d736168696c3932313426"
          alt="contri"
        />
      </Box>
    </div>
  );
};

export default Github;
