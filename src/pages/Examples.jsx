import React from "react";
import ArrowButton from "../components/Buttons/ArrowButton";
import monkey from "../assets/images/monkey.jpg";
import punk from "../assets/images/punk.jpg";
import swirl from "../assets/images/swirl.webp";
import woman from "../assets/images/woman.jpg";
import gunman from "../assets/images/gun_man.jpg";
import fox from "../assets/images/fox.jpg";
import man from "../assets/images/man_2.webp";
import boy from "../assets/images/boy.webp";
import woman2 from "../assets/images/woman2.webp";

import { motion, AnimatePresence } from "framer-motion";

const slides = [
  [monkey],
  [boy, gunman],
  [fox],
  [woman, swirl],
  [punk],
  [woman2, man],
];

function Examples() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [isAnimating, setIsAnimating] = React.useState(false); // New state to track animation status

  const handleAnimationStart = () => {
    setIsAnimating(true); // Animation started, set isAnimating to true
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false); // Animation completed, set isAnimating back to false
  };

  // Preload images when the component mounts
  React.useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = [].concat(...slides);
      imagesToPreload.forEach((image) => {
        new Image().src = image;
      });
    };

    preloadImages();
  }, []);

  const slideVariants = {
    hidden: {
      x: direction > 0 ? "100%" : "-100%", // Slide out to the right or left based on direction
      opacity: 1,
    },
    visible: {
      x: "0%", // Slide in from the opposite direction
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: direction < 0 ? "100%" : "-100%", // Slide out to the left or right based on direction when exiting
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const handlePrevSlide = async () => {
    await setDirection(-1);
    await setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = async () => {
    await setDirection(1);
    await setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderImagesForSlide = (index) => {
    return slides[index].map((img, idx) => (
      <img
        key={img}
        src={img}
        alt="Slide"
        className={`w-full ${
          slides[index].length === 1 ? "h-full" : "h-1/2"
        } object-cover`}
      />
    ));
  };

  return (
    <div className="overflow-hidden">
      <div className=" px-8 md:px-14 lg:px-48 text-left pb-10 md:pb-20">
        <div className="relative text-[#8B898C] text-lg md:text-2xl lg:text-3xl font-semibold mb-6 pt-10 z-20">
          Elevate Your Content
        </div>
        <div className="relative text-3xl md:text-6xl lg:text-8xl text-white mb-10 md:mb-20 z-20">
          Check Out Some Creative{" "}
          <span className="text-[#00FFE3]">
            <br />
            AI Generated Examples
          </span>
        </div>
      </div>

      <div
        className="relative w-full h-[550px] md:h-[750px] lg:h-[806px] aspect-[1.329] lg:flex lg:justify-center"
      >
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="popLayout"
          onExitComplete={handleAnimationComplete}
          onEnterComplete={handleAnimationComplete}
          onExitStart={handleAnimationStart}
          onEnterStart={handleAnimationStart}
        >
          <motion.div
            className="hidden lg:block lg:w-full"
            key={currentIndex - 1}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Previous Slide on Large Screens */}
            {currentIndex === 0
              ? renderImagesForSlide(slides.length - 1)
              : renderImagesForSlide(currentIndex - 1)}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="popLayout"
          onExitComplete={handleAnimationComplete}
          onEnterComplete={handleAnimationComplete}
          onExitStart={handleAnimationStart}
          onEnterStart={handleAnimationStart}
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-[550px] md:h-[750px] lg:h-[806px] lg:w-full"
          >
            {/* Current Slide */}
            {renderImagesForSlide(currentIndex)}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="popLayout"
          onExitComplete={handleAnimationComplete}
          onEnterComplete={handleAnimationComplete}
          onExitStart={handleAnimationStart}
          onEnterStart={handleAnimationStart}
        >
          <motion.div
            className="hidden lg:block lg:w-full"
            key={currentIndex + 1}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Next Slide on Large Screens */}
            {currentIndex === slides.length - 1
              ? renderImagesForSlide(0)
              : renderImagesForSlide(currentIndex + 1)}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-row justify-center items-center w-full z-10">
          {/* Left Arrow */}
          <div className="absolute left-1/3 md:left-4 bottom-4 md:bottom-auto md:top-1/2 md:translate-y-[-50%]">
            <button
              className="focus:outline-none"
              disabled={isAnimating}
              onClick={async () => {
                await setIsAnimating(true);
                await setDirection(-1); // First function
                await handlePrevSlide();
              }}
            >
              <ArrowButton type="left" />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute right-1/3 md:right-4 bottom-4 md:bottom-auto md:top-1/2 md:translate-y-[-50%]">
            <button
              className="focus:outline-none"
              disabled={isAnimating}
              onClick={async () => {
                await setIsAnimating(true);
                await setDirection(1); // First function
                await handleNextSlide();
              }}
            >
              <ArrowButton type="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Examples;
