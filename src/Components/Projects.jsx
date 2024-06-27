import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import hindustan from "../Images/Hindustan.png";
import meesho from "../Images/meesho.png";
import Tracking from "../Images/Tracking.png";
import booking from "../Images/mBooking.png";
import ProjectsCard from "./ProjectsCard";
import "../Styles/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";
const ProjectsDetails = [
  {
    IMAGE: booking,
    NAME: "Booking.com (Clone)",
    TECHSTACK: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "Render",
      "CkakraUi",
      "Chart.JS",
    ],
    DISCRIPTION:
      "Booking.com provides online reservation services. We act as an intermediary (agent) between guests who want to make an accommodation reservation and your hotel, property or temporary/vacation rental.",
    GITHUB: "https://github.com/Subham0629/Booking.com",
    DEPLOY: "https://mbooking-beta.vercel.app/",
  },

  {
    IMAGE: meesho,
    NAME: "Meesho.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript", "Chart.JS", "React.JS", "Cyclic"],
    DISCRIPTION:
      "A clone of the Meesho website, which is an online marketplace for individuals and small businesses to sell products through social media channels.",
    GITHUB: "https://github.com/palabhi017/Meesho-Clone",
    DEPLOY: "https://storied-blini-63970f.netlify.app/",
  },
  {
    IMAGE: Tracking,
    NAME: "Tracking.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript", "Cyclic", "Api"],
    DISCRIPTION:
      "This is the clone of Chargebee which provides all type of business solutions to different companies",
    GITHUB: "https://github.com/Alex-Dsilva/eminent-art-8078",
    DEPLOY: "https://fatsecret.vercel.app/",
  },

  {
    IMAGE: hindustan,
    NAME: "Hindustan.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript"],
    DISCRIPTION:
      "This is the clone of Shine.com which is an online job portal & that also offers many courses for skills development.",
    GITHUB: "https://github.com/Sahil9214/HindustanTime",
    DEPLOY: "https://hindustan-time.vercel.app/",
  },
];

export default function SimpleThreeColumns() {
  AOS.init();
  return (
    <div data-aos="fade-in">
      <Box p={4} id="projects">
        <div className="contact-name">
          <span className="dash"></span>
          <h2 className="contact_heading">Projects</h2>
          <span className="dash"></span>
        </div>
        <Divider width={"80%"} margin={"auto"} />

        <br />
        <br />
        <br />
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
          {ProjectsDetails.map((item, i) => (
            <ProjectsCard
              className="project-card"
              IMAGE={item.IMAGE}
              NAME={item.NAME}
              TECHSTACK={item.TECHSTACK}
              DISCRIPTION={item.DISCRIPTION}
              GITHUB={item.GITHUB}
              DEPLOY={item.DEPLOY}
            />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
