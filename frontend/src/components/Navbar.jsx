const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#mySkills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
