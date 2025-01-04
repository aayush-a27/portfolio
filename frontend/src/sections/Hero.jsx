import GradientText from "../components/GradientText";
import { Boxes } from "../components/ui/BackgroundBoxes";

const Hero = () => {
  return (
    <section
      data-scroll
      data-scroll-speed="-.8"
      id="hero"
      className="h-screen relative flex flex-col items-center justify-center bg-black text-white overflow-hidden" // Added overflow-hidden
    >
      <Boxes />
      <h1 className="absolute -mt-48 text-4xl md:text-6xl font-bold">
        Hi, I am Aayush Bhadula
      </h1>
      <p className="absolute text-lg md:text-4xl mt-4">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          FullStack Web Developer
        </GradientText>
      </p>
      <a
        href="#about"
        className="absolute translate-y-20 px-6 py-3 bg-white text-blue-500 font-semibold rounded-md"
      >
        Learn More About Me
      </a>
    </section>
  );
};

export default Hero;
