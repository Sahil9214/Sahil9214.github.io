// import React from "react";
// import { Text, Heading, Box, Flex, Image, Divider } from "@chakra-ui/react";
// import "../Styles/Github.css";
// import GitHubCalendar from "react-github-calendar";
// import calender from "../Images/calender.png";

// const Github = () => {
//   return (
//     <div className="gitStats">
//       <Text className="github_contribution">GITHUB CONTRIBUTION</Text>
//       <br />
//       <Divider width={"80%"} margin={"auto"} />
//       <br />
//       <Box>
//         <Box className="Image_Section" id="github-streak-stats">
//           <Image
//             className="githubImages"
//             w={"100%"}
//             src="https://github-readme-streak-stats.herokuapp.com/?user=Sahil9214&theme=radical&hide_border=false"
//             alt="github"
//           />
//         </Box>
//         <br />
//         <br />
//         <Box className="Image_Section">
//           <Flex>
//             <Image
//               id="github-top-langs"
//               width={"50%"}
//               className="githubImages"
//               src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sahil9214&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
//               alt="git"
//             />
//           </Flex>
//         </Box>
//         <br />
//         <br />
//         <Box className="Image_Section">
//           <Image
//             id="github-stats-card"
//             className="githubImages"
//             w={"70%"}
//             src="https://github-readme-stats.vercel.app/api?username=Sahil9214&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
//             alt="contri"
//           />
//         </Box>

//       </Box>
//     </div>
//   );
// };

// export default Github;
import React from "react";
// import GitHubCalendar from "react-github-calendar";
import styles from "../Styles/Github.module.css";
import calender from "../Images/calender.png";
import { Text, Divider,Box } from "@chakra-ui/react";
const GitStats = () => {
  return (
    <div className={styles.gitStats}>
      {/* Heading */}
      {/* <div className={styles.headingContainer}>
        <span className={styles.orangeDash}></span>
        <h2 className={styles.heading}>GITHUB CONTRIBUTIONS</h2>
        <span className={styles.orangeDash}></span>
      </div> */}
      <Text className={styles.github_contribution}>GITHUB CONTRIBUTION</Text>
      <br />
      <Divider width={"80%"} margin={"auto"} />
      <br />
      {/* Calendar */}

      {/* Stats */}
      <div className={styles.commits}>
        <img
          id="github-streak-stats"
          className={styles.commit2}
          src="https://github-readme-streak-stats.herokuapp.com/?user=Sahil9214&theme=radical&hide_border=false"
          // src="https://github-readme-streak-stats.herokuapp.com?user=dRahul97&theme=radical&hide_border=false"(previous one)
          // [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=dRahul97&theme=radical&hide_border=true)](https://git.io/streak-stats)
          alt=""
        />

       
        <img
          id="github-stats-card"
          className={styles.commit1}
          src="https://github-readme-stats.vercel.app/api?username=Sahil9214&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
         
          alt=""
        />
         <img
          id="github-top-langs"
          className={styles.commit3}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sahil9214&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
       
          alt=""
        />
        <div className={styles.calender}>
          <Box className="react-activity-calendar">
          <img src={calender} alt="" height={"100%"} width={"99%"} className="" />
          {/* <GitHubCalendar
          style={{ transform: "scale(18)" }}
          hideTotalCount="false"
          hideColorLegend="false"
          blockSize={15}
          username="drahul97"
        /> */}
        </Box>
        </div>
      </div>
    </div>
  );
};

export default GitStats;
