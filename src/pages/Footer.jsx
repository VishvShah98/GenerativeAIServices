import cube from "../assets/images/cube.webp";
import pyramid from "../assets/images/pyramid.webp";
import { motion } from "framer-motion";
import CreateYourselfButton from "../components/Buttons/CreateYourselfButton";
import ArrowButton from "../components/Buttons/ArrowButton";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

const pyramidVariants = {
  initial: {
    x: 0, // Initial horizontal position
    y: -100, // Initial vertical position
  },
  animate: {
    x: [0], // Keep the horizontal animation sequence empty to prevent left and right movement
    y: [-100, 0, -100], // Define the vertical animation sequence (down, up, back down to the center)
    transition: {
      duration: 10, // Total duration of the animation loop
      repeat: Infinity, // Repeat the animation infinitely
      ease: "linear", // Linear easing for continuous motion
    },
  },
};

const handleNavigation = (e, sectionId) => {
  e.preventDefault();
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
  // toggleMenu(); // Close the menu when a menu item is clicked
};

function Footer() {
  return (
    <div className=" pb-24">
      <div className="z-10 relative flex items-center justify-center px-4 md:px-14 lg:px-28">
        <div className="w-full h-full backdrop-blur-md backdrop-filter bg-white bg-opacity-5 rounded-3xl border border-[#454247] text-white text-3xl p-6 md:text-6xl md:p-24  lg:text-9xl lg:p-20">
          Transform your Imagination
          <span className="text-[#00FFE3]"> into Reality Today</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="text-white pt-10 md:pt-20 lg:pt-28 px-10 md:px-14 lg:px-48  text-md md:text-2xl lg:text-4xl w-[100%] md:w-2/3 lg:w-1/2">
            Explore the power of AI and unlock endless possibilities for your
            visual creations.
            <br />
            <br />
            <CreateYourselfButton />
          </div>
          <motion.div
            variants={pyramidVariants}
            initial="initial"
            animate="animate"
            className="hidden md:block z-0"
          >
            <img className=" md:w-full" src={pyramid}></img>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around px-4 md:px-14 lg:px-28 pt-36  text-md md:text-2xl lg:text-3xl">
        <div>
          <div className="flex space-x-4 md: space-x-8 lg:space-x-8 text-white text-lg md:text-3xl lg:text-3xl">
            <a className="hover:text-[#00FFE3] cursor-pointer transition duration-300">
              <BiLogoFacebook />
            </a>
            <a className="hover:text-[#00FFE3] cursor-pointer transition duration-300">
              <BiLogoInstagram />
            </a>
          </div>
        </div>
        <div className="text-white hidden md:block">Vishv Shah - 2023</div>
        <button>
          <a href="#" onClick={(e) => handleNavigation(e, 'homepage')}>
            <ArrowButton type="up" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Footer;
