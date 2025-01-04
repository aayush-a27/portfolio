import { BlurText } from "../components/BlurText";
import { FaLaptopCode, FaRocket, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      data-scroll
      data-scroll-speed=".01"
      id="about"
      className=" h-screen pt-20 gap-12 bg-gray-900 text-gray-300 flex flex-col items-center justify-start"
    >
      <div className="text-6xl font-bold text-zinc-100 flex items-center gap-4">
        <FaRocket className="text-yellow-400" /> About Me
      </div>
      <div className="font-[Titillium Web] px-10 py-12 flex-nowrap w-full text-center text-3xl  leading-relaxed tracking-wide break-words bg-gray-800 bg-opacity-50 rounded-xl shadow-lg">
        <BlurText
          text="Hi! I'm Aayush Bhadula, a passionate Full-Stack Web Developer with a strong foundation in HTML, CSS, JavaScript, and the MERN stack (MongoDB, Express.js, React, Node.js). I thrive on building dynamic, responsive, and user-friendly web applications that provide seamless experiences. Whether it's designing clean and functional frontend interfaces or developing robust backend solutions, I’m always excited to take on new challenges and continuously improve my skills. When I’m not coding, I enjoy exploring new technologies, solving real-world problems, and staying up to date with the latest trends in web development."
          className="custom-class"
          delay={10}
        />
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col items-center ">
          <FaLaptopCode className="text-4xl text-yellow-400" />
          <p className="mt-2 text-sm">Full-Stack Development</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCode className="text-4xl text-yellow-400" />
          <p className="mt-2 text-sm">Clean Code</p>
        </div>
      </div>
    </section>
  );
};

export default About;
