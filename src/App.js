import React, { useEffect }  from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

import NavBar from "./common/NavBar/NavBar";
import Heropage from "./screens/Heropage/Hero";
import AboutMe from "./screens/AboutME/AbountMe";
import Education from "./screens/Education/Education";
import Professional from "./screens/Professional/Professional";
import KeyStrengths from "./screens/KeyStrengths/KeyStrengths";
import Contact from "./screens/Contact/Contact";
import SendMe from "./screens/SendMe/SendMe";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <NavBar />
      <Heropage />
      <AboutMe />
      <Education />
      <Professional />
      <KeyStrengths />
      <Contact />
      <SendMe />
    </>
  );
}

export default App;
