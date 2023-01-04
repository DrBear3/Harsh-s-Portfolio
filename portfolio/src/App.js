import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience";


function App() {
  return (
    <div>
     <NavBar />
     <Home />
        <About />
     <SocialLinks />
     <Portfolio />
     <Experience />
     <Contact />
    
    </div>
  );
}

export default App;
