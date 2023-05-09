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
      <Box className="react-activity-calendar">
        <Box className="Image_Section" id="github-streak-stats">
          <Image
            className="githubImages"
            w={"100%"}
            src="https://github-readme-streak-stats.herokuapp.com/?user=Sahil9214&theme=radical&hide_border=false"
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

            <Image
              id="github-top-langs"
              width={"50%"}
              className="githubImages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sahil9214&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
              alt="git"
            />
          </Flex>
        </Box>
        <br />
        <br />
        <Box className="Image_Section">
          <Image
            id="github-stats-card"
            className="githubImages"
            w={"70%"}
            src="https://github-readme-stats.vercel.app/api?username=Sahil9214&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
            alt="contri"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Github;
