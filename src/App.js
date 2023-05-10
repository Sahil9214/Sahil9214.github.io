import "./App.css";
import ParticlesComponent from "./Components/Particle";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import TechnicalSkills from "./Components/TechnicalSkills";
import Projects from "./Components/Projects";
import Github from "./Components/Github";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <ParticlesComponent />
      <Navbar id="nav_menu" style={{ display: "sticky", top: "0px" }} />
      <br />

      <br />
      <AboutMe />

      <Home />
      <br />
      <TechnicalSkills />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Github />
      <br />
      <Contact />
      <br />
    </div>
  );
}

export default App;
//style={{backgroundColor:"#0F0F0F"}}
