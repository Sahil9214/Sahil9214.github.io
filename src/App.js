import "./App.css";
import ParticlesComponent from "./Components/Particle";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import TechnicalSkills from "./Components/TechnicalSkills";
import Projects from "./Components/Projects";
import Github from "./Components/Github";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App" >
      <ParticlesComponent />
      <Navbar id="nav_menu" style={{ display: "sticky", top: "0px" }} />
      <AboutMe />
      <br />
      <TechnicalSkills id="skills" />
      <br />
      <Projects id="projects" />
      <br />
      <br />
      <Github />
      <br />
      <Contact id="contact" />
    </div>
  );
}

export default App;
//style={{backgroundColor:"#0F0F0F"}}