import React from "react";
import styles from "../Styles/Home.module.css";
import { Text, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <div id="about" className="about section" style={{ marginTop: "-80px" }}>
      <div id={styles.aboutContainer}>
        <Text className="about_me_heading">About Me</Text>
        <br />
        <Divider width={"80%"} margin={"auto"} />

        <div id="user-detail-intro" className={styles.aboutme}>
          {/* <h3>
            {" "}
            Hello! my name is Utkarsh Singhal, 👋 a Full stack web developer.{" "}
          </h3> */}
          <p className={styles.aboutME_p} style={{ fontSize: "20px" }}>
            🔸Worked on different projects as leader and co-leader. 🔸
            <br />
            🔸 Keen to find a challenging position within an ambitious
            company.🔸
            <br />
            🔸 Interested in learning and absorbing new tech in the growing
            world.🔸 <br />
            🔸Innovative, result-driven Web Developer with sound knowledge in
            JavaScript and React in the Frontend.
            <br />
            🔸For Backend I have a prior knowledge of Node.JS,express,mongoDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
