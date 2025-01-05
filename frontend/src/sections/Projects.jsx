import project1Img from "../assets/project1.png";
import project2Img from "../assets/SyncProImg.png";
import project3Img from "../assets/e-ticketing.png";
import { CardBody, CardContainer, CardItem } from "../components/ui/3Dcard";
import { FaExternalLinkAlt, FaPlay } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Syncpro",
      description:
        "A meeting management web app that enables users to schedule, join, record, and summarize meetings effortlessly.",
      link: "https://sync-pro.vercel.app/",
      demo: "https://github.com/aayush-a27/Sync-Pro",
      imgSrc: project2Img,
    },
    {
      title: "Vastra",
      description:
        "An e-commerce clothing web app where users can explore a wide range of clothing options, select sizes and quantities, and enjoy seamless shopping.",
      link: "https://vastra-e-commerce-site.vercel.app/",
      demo: "https://github.com/aayush-a27/Vastra-E-commerce-site",
      imgSrc: project1Img,
    },
    {
      title: "Movie Ticket App",
      description:
        "A dynamic web app for booking movie tickets, allowing users to explore nearby theaters, check real-time show timings, and book seats seamlessly.",
      link: "#",
      demo: "https://github.com/aayush-a27/E-ticketing",
      imgSrc: project3Img,
    },
  ];

  return (
    <section
  id="projects"
  className="h-screen w-full bg-[#0d1b2a] text-gray-300 flex"
>
  {/* Title with full page height */}
  <h2 className="text-8xl h-full w-20 ml-10 border-r-[1px] font-bold flex justify-center items-center text-white">
    <div className="-rotate-90 w-auto  ">Projects</div>
  </h2>
  {/* Project container */}
  <div className="container w-[85%] mx-auto flex items-center">
    <div className="grid md:grid-cols-3 gap-12">
      {projects.map((project, index) => (
        <CardContainer className="inter-var" key={index}>
          <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-gray-700 w-auto h-auto rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt-2"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={project.imgSrc}
                height="1000"
                width="1000"
                className="h-48 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href={project.link}
                target="__blank"
                className="flex items-center gap-2 px-4 py-2 text-black rounded-xl text-xs font-normal dark:text-gray-300 bg-yellow-400 hover:bg-yellow-300"
              >
                <FaExternalLinkAlt /> Try now
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href={project.demo}
                target="__blank"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700 dark:bg-yellow-400 text-yellow-400 dark:text-gray-900 text-xs font-bold hover:bg-yellow-300"
              >
                <FaPlay /> Code
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;
