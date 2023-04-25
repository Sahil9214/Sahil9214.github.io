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
    <div className="App" style={{backgroundColor:"#0F0F0F"}}>
      {/* <ParticlesComponent /> */}
      <Navbar style={{ display: "sticky", top: "0px" }} />
      <AboutMe />
      <br />
      <TechnicalSkills />
      <br />
      <Projects />
      <br />
      <Github />
      <br />
      <Contact />
    </div>
  );
}

export default App;
