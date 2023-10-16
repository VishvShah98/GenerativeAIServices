import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowButton from "./Buttons/ArrowButton";
import monkey from "../assets/images/monkey.jpg";
import yoda from "../assets/images/yoda.jpg";
import panda from "../assets/images/panda.jpg";
import CustomTypingAnimation from "./CustomTypingAnimation";

const images = [monkey, yoda, panda];
const text = [
  "Photo of a Gorilla wearing hip hop clothes",
  "Baby Yoda wearing sunglasses",
  "Cute cyberpunk panda bear",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const preloadImages = async () => {
    for (const imageUrl of images) {
      const img = new Image();
      img.src = imageUrl;
      await img.decode(); // Wait for the image to be fully loaded
    }
  };

  useEffect(() => {
    preloadImages();
  }, []);

  const goToPreviousImage = () => {
    // setDirection(-1); // Set direction to -1 for "previous"
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    // setDirection(1); // Set direction to 1 for "next"
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Variants for image animation
  const imageVariants = {
    enter: {
      opacity: 0,
      x: direction === 1 ? "-100%" : "100%", // Enter from the right or left side based on direction
      transition: { ease: "easeInOut" },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: direction === 1 ? "100%" : "-100%", // Exit to the left or right side based on direction
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <div className="flex items-center">
      <div className="relative w-[80%]">
        {/* AnimatePresence to enable enter/exit animations */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {/* The key prop is crucial here to make sure the components are distinct */}
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={images[currentIndex]}
            className="rounded-3xl w-full z-10 "
            variants={imageVariants} // adding the variants here
            initial="enter" // initial state defined in variants
            animate="center" // animate to center state
            exit="exit" // exit state
            custom={direction}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-[50%] transform translate-x-[-50%] mb-[15%] ml-[10%] lg:ml-0 lg:mb-[30%]">
          <CustomTypingAnimation text={text[currentIndex]} />
        </div>
      </div>
      <div className="flex flex-col items-center  w-[20%] space-y-2 lg:space-y-4 p-6 lg:p-14 z-20">
        <div>
          <ArrowButton
            type="left"
            onClick={async () => {
              await setDirection(-1); // First function
              goToPreviousImage(); // Second function
            }}
          />
        </div>
        <div>
          <ArrowButton
            type="right"
            onClick={async () => {
              await setDirection(1); // First function
              goToNextImage(); // Second function
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
