import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import LocomotiveScroll from 'locomotive-scroll';
import Skills from "./sections/Skills";
// import CustomCursor from "./components/ui/CustomCursor";
const App = () => {


 const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="bg-[#0B1120]">
      {/* <CustomCursor /> */}
      <Navbar />
      <Hero />
      <About /> {/* Fading effect applied in the About section */}
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
