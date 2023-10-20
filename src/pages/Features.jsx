import React, { useState } from "react";
import TryItYourselfButton from "../components/Buttons/TryItYourselfButton";
import enhancePicture from "../assets/images/enhance-1.jpg";
import removeBgPicture from "../assets/images/before.webp";
import colorizePicture from "../assets/images/enhance-2.webp";
import { motion, AnimatePresence } from "framer-motion";

const images = [enhancePicture, colorizePicture, removeBgPicture];
const options = ["Enhance", "Colorize", "Remove Bg"];
const titles = [
  "Make blurry pictures clear in seconds",
  "Bring cherished old photos back to life",
  "Remove background in just one click",
];
const description = [
  "Boost the resolution of any photo, whether it is a portrait, product or graphic.",
  "Infuse new life into black and white or faded images, restoring them to their original brilliance.",
  "Effortlessly isolate your subject and remove unwanted backgrounds in an instant.",
];

const containerVariants = {
  hidden: {
    opacity: 0,
    x: 30, // The container will slide from below.
    transition: {
      duration: 0.6, // Slightly slower start
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2, // Giving more time makes the motion noticeable and smooth
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3, // More stagger gives each child more individual focus
    },
  },
  exit: {
    opacity: 0,
    x: -30, // A slight slide up gives the feeling of it disappearing into the distance
    transition: {
      duration: 0.6, // Not too quick to be jarring, but feels responsive
      ease: "easeIn",
    },
  },
};

const imageVariants = {
  initial: {
    scale: 0.99, // Starting slightly smaller
    filter: "blur(10px) brightness(0.5)", // Beginning with blur
    rotate: 0, // No rotation for a clean entrance
  },
  exit: {
    scale: 0.99, // Scaling up a bit as it disappears, creating a 'lifting away' sensation
    filter: "blur(10px) brightness(0.5)", // A return to the blur as focus is 'lost'
    rotate: 0,
    transition: {
      duration: 0.4, // Faster exit to feel responsive and clean
      ease: "easeIn", // Starting slow, then speeding up
    },
  },
  enter: {
    scale: 1,
    filter: "blur(0px) brightness(1) saturate(1)", // Fully in focus and vibrant
    rotate: 0,
    transition: {
      duration: 0.8, // Reduced time for a quicker entrance
      ease: [0.42, 0, 0.58, 1], // This cubic-bezier provides a smooth and quick entrance
    },
  },
};

function Features() {
  // Use state hook for managing index
  const [index, setIndex] = useState(0); // Default index is 0
  const [isAnimating, setIsAnimating] = useState(false); // New state to track animation status

  // Preload images using useEffect
  React.useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const handleAnimationStart = () => {
    setIsAnimating(true); // Animation started, set isAnimating to true
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false); // Animation completed, set isAnimating back to false
  };

  const handleButtonClick = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div id="features" className="relative h-screen md:flex text-white overflow-hidden pt-10 md:pt-0">
      {/* BACKGROUND IMAGE */}
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={handleAnimationComplete}
        onEnterComplete={handleAnimationComplete}
        onExitStart={handleAnimationStart}
        onEnterStart={handleAnimationStart}
      >
        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center h-screen w-full aspect-[1.777] object-cover"
          variants={imageVariants} // The variants we defined above
          initial="initial"
          animate="enter" // Start the 'enter' animation as soon as the component is in the DOM
          exit="exit" // Use the 'exit' animation when the component is removed from the DOM
        />
      </AnimatePresence>
      {/* DESCRIPTION */}
      <AnimatePresence
        initial={false}
        mode="popLayout"
        onExitComplete={handleAnimationComplete}
        onEnterComplete={handleAnimationComplete}
        onExitStart={handleAnimationStart}
        onEnterStart={handleAnimationStart}
      >
        <div className="relative h-1/2 md:h-full md:w-1/2 mb-[20%] lg:mb-[0%] pb-0 md:pb-[20%] lg:pb-0  px-8 md:px-14 lg:px-48 z-20 text-white space-y-6 md:space-y-12 flex flex-col justify-center z-10">
          <motion.div
            key={options[index]}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-[#8B898C] text-lg md:text-3xl lg:text-2xl font-semibold"
          >
            {options[index]}
          </motion.div>
          <motion.div
            key={titles[index]}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-4xl md:text-6xl lg:text-8xl font-semibold w-[90%] md:w-[200%]"
          >
            {titles[index]}
          </motion.div>
          <motion.div
            key={description[index]}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-md md:text-xl lg:text-2xl font-semibold w-[80%] md:w-[100%]"
          >
            {description[index]}
          </motion.div>
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pb-8 md:pb-0"
          >
            <TryItYourselfButton />
          </motion.div>
        </div>
      </AnimatePresence>

      {/* MENU */}
      <div className="mt-[0%] md:mt-[10%] lg:mt-[0%] md:w-1/2 px-8 md:px-0 flex justify-center items-center z-20">
        <div className="w-full md:w-fit h-full md:h-fit flex md:flex-col justify-center items-center rounded-md md:rounded-2xl backdrop-blur-2xl backdrop-filter bg-black bg-opacity-20 border border-[#454247] text-white text-lg md:text-3xl lg:text-2xl">
          {options.map((option, optionIndex) => (
            <button
              className={`w-full flex flex-col md:flex-row justify-start md:justify-start items-center text-left rounded-md md:rounded-2xl hover:scale-105  transition duration-300 px-1 py-3 md:px-8 md:py-6 lg:px-10 lg:py-4 `}
              key={optionIndex}
              disabled={isAnimating}
              // onClick={() => handleButtonClick(optionIndex)}
              onClick={async () => {
                await setIsAnimating(true);
                handleButtonClick(optionIndex); // Second function
              }}
            >
              <img
                src={images[optionIndex]}
                alt="Option"
                className="hidden md:block h-[70px] w-[100px] md:aspect-[1.777] object-cover mb-2 md:mb-0 md:mr-4"
              />
              <div
                className={` transition duration-300  ${
                  optionIndex === index
                    ? "text-[#00FFE3]"
                    : "hover:text-[white]"
                }`}
              >
                {option}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
