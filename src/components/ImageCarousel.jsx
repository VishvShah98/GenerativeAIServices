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
  const [loadedImages, setLoadedImages] = useState(
    new Array(images.length).fill(false)
  );
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoaded) => {
      const newLoaded = [...prevLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const goToPreviousImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    if (loadedImages[prevIndex]) {
      setDirection(-1);
      setCurrentIndex(prevIndex);
    }
    // else do nothing, wait for image to load
  };

  const goToNextImage = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    if (loadedImages[nextIndex]) {
      setDirection(1);
      setCurrentIndex(nextIndex);
    }
    // else do nothing, wait for image to load
  };

  useEffect(() => {
    // Preload images
    images.forEach((imgSrc, index) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => handleImageLoad(index);
    });
  }, []);

  // Variants for image animation
  const imageVariants = {
    enter: {
      opacity: 0,
      x: direction === 1 ? "-100%" : "100%", // Enter from the right or left side based on direction
      transition: { ease: "easeInOut", duration: 0.5 },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: direction === 1 ? "100%" : "-100%", // Exit to the left or right side based on direction
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  return (
    <div className="flex items-center">
      <div className="relative w-[80%]">
        {/* AnimatePresence to enable enter/exit animations */}
        {loadedImages[currentIndex] && (
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {/* The key prop is crucial here to make sure the components are distinct */}

            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={images[currentIndex]}
              className="rounded-3xl aspect-[1.329] w-full h-[300px] md:h-[450px] w-full lg:w-full lg:h-[806px] z-10 "
              variants={imageVariants} // adding the variants here
              initial="enter" // initial state defined in variants
              animate="center" // animate to center state
              exit="exit" // exit state
              custom={direction}
            />
          </AnimatePresence>
        )}
        <div className="absolute bottom-0 left-[50%] transform translate-x-[-50%] mb-[15%] ml-[10%] lg:ml-0 lg:mb-[30%]">
          <CustomTypingAnimation text={text[currentIndex]} />
        </div>
      </div>
      <div className="flex flex-col items-center  w-[20%] space-y-2 lg:space-y-4 p-10 lg:p-14 z-20">
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
