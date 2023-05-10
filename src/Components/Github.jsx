import React from "react";
import { Text, Heading, Box, Flex, Image, Divider } from "@chakra-ui/react";
import "../Styles/Github.css";
import GitHubCalendar from "react-github-calendar";
import calender from "../Images/calender.png";

const Github = () => {
  return (
    <div className="gitStats">
      <Text className="github_contribution">GITHUB CONTRIBUTION</Text>
      <br />
      <Divider width={"80%"} margin={"auto"} />
      <br />
      <Box>
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
        <Image
          style={{ border: "10px solid red", zIndex: "1" }}
          className="react-activity-calendar"
          src={calender}
          alt="calender"
        />
       
        <GitHubCalendar username="sahil9214" />
     
      </Box>
    </div>
  );
};

export default Github;
