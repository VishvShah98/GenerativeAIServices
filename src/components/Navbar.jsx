import { VscListFilter } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    handleToggle(); // Close the menu when a menu item is clicked
  };
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 px-4 py-4 md:px-14 md:py-10 lg:px-52 lg:py-12 z-[99]">
      {!isOpen && (
        <button
          className="text-4xl md:text-5xl lg:text-6xl text-white hover:text-[#00FFE3] transition duration-300"
          onClick={handleToggle}
        >
          <VscListFilter />
        </button>
      )}
      {isOpen && (
        <motion.div
          //make the div animate from the top
          initial={{ y: "-100%" }}
          animate={{ y: -32 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md backdrop-filter bg-black bg-opacity-60 border-[#454247] border rounded-lg  px-12 py-8  w-[100vw] md:w-full"
        >
          <button
            className="text-4xl md:text-5xl lg:text-6xl text-white hover:text-[#00FFE3] transition duration-300"
            onClick={handleToggle}
          >
            <RxCross1 />
          </button>
          <ul className="list-none text-base text-white cursor-pointer space-y-8  pt-8 font-normal text-xs md:text-xl lg:text-xl tracking-wide">
            <li className="text-center">
              <a
                className="hover:text-[#00FFE3] transition duration-300"
                href="#"
                onClick={(e) => handleNavigation(e, "imageGenerator")}
              >
                Image Generator
              </a>
            </li>
            <li className="text-center">
              <a
                className="hover:text-[#00FFE3] transition duration-300"
                href="#"
                onClick={(e) => handleNavigation(e, "writingTool")}
              >
                AI Writing Tool
              </a>
            </li>
            <li className="text-center">
              <a
                className="hover:text-[#00FFE3] transition duration-300"
                href="#"
                onClick={(e) => handleNavigation(e, "features")}
              >
                Features
              </a>
            </li>
            <li className="text-center">
              <a
                className="hover:text-[#00FFE3] transition duration-300"
                href="#"
                onClick={(e) => handleNavigation(e, "useCases")}
              >
                Use Cases
              </a>
            </li>
            <li className="text-center">
              <a
                className="hover:text-[#00FFE3] transition duration-300"
                href="#"
                onClick={(e) => handleNavigation(e, "examples")}
              >
                Examples
              </a>
            </li>
            <li className="text-center pb-8">
              <a
                className="hover:text-[#00FFE3] transition duration-300"
                href="#"
                onClick={(e) => handleNavigation(e, "testimonials")}
              >
                Testimonials
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
