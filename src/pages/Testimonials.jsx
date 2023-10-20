import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowButton from "../components/Buttons/ArrowButton";
import face1 from "../assets/images/t11.webp";
import face2 from "../assets/images/t21.webp";
import face3 from "../assets/images/t31.webp";

const testimonials = [
  "As a graphic designer, I’m always on the lookout for efficient tools to create captivating images, and this software is a game-changer! With just one click, I can generate unique and stunning visuals that elevate my marketing campaigns to a whole new level.",
  "Using the generative AI services  has been a game-changer for my creative projects. The ability to generate images from text descriptions has sparked my imagination and allowed me to bring my ideas to life effortlessly. It has completely transformed my creative process and opened up new avenues for artistic exploration.",
  "The colorization service has truly brought my old photos back to life. I was amazed at how vivid and realistic the colors turned out, giving a fresh perspective to my cherished memories. It's like stepping into a time machine with a touch of modern artistry.",
];

const names = ["Ryan Murphy", "Sara Smith", "John Doe"];

const faces = [face1, face2, face3];

function Testimonials() {
  const [current, setCurrent] = React.useState(0); // This state keeps track of the current testimonial being viewed.
  const [direction, setDirection] = React.useState(1);

  const [isAnimating, setIsAnimating] = React.useState(false); // New state to track animation status

  const handleAnimationStart = () => {
    setIsAnimating(true); // Animation started, set isAnimating to true
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false); // Animation completed, set isAnimating back to false
  };

  const handlePrevSlide = async () => {
    await setDirection(-1);
    await setCurrent((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = async () => {
    await setDirection(1);
    await setCurrent((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Variants for image animation
  const Variants = {
    enter: {
      opacity: 1,
      x: direction === 1 ? "-100%" : "100%", // Enter from the right or left side based on direction
      transition: { ease: "easeInOut", duration: 1 },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 1 },
    },
    exit: {
      opacity: 1,
      x: direction === 1 ? "100%" : "-100%", // Exit to the left or right side based on direction
      transition: { ease: "easeInOut", duration: 1 },
    },
  };

  React.useEffect(() => {
    // Preload images
    faces.forEach((imgSrc, index) => {
      const img = new Image();
      img.src = imgSrc;
      img.decode();
    });
  }, []);

  // This is your individual testimonial layout. You could also move this to its component if preferred.
  const Testimonial = ({ testimonial, name, face }) => (
    <div className="testimonial px-8 md:px-14 lg:px-48">
      <p className="testimonial-text text-white mb-6 text-md md:text-2xl lg:text-4xl font-medium">
        "{testimonial}"
      </p>
      <div className="testimonial-person flex flex-row items-center justify-center space-x-4">
        <img
          src={face}
          alt={name}
          className="testimonial-face rounded-full border border-[#00FFE3] border-4 w-12 md:w-20 lg:w-24"
        />
        <div className="testimonial-name text-[#00FFE3] text-sm md:text-xl lg:text-2xl font-medium">
          {name}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 pb-20 md:pt-40 md:pb-40 overflow-hidden">
      <div className="text-center pb-10 md:pb-10">
        <div
          id="testimonials"
          className="relative text-[#8B898C] text-lg md:text-2xl lg:text-3xl font-semibold mb-2 pt-10 z-20"
        >
          Testimonials
        </div>
        <div className="relative text-3xl md:text-6xl lg:text-8xl text-white mb-6 md:mb-10 z-20 ">
          What Creatives are Saying
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-0">
        {/* Left Arrow for medium and larger screens */}
        <div className="hidden md:flex items-center pl-8">
          <button
            className="focus:outline-none z-20"
            disabled={isAnimating}
            onClick={async () => {
              await setIsAnimating(true);
              await setDirection(-1);
              await handlePrevSlide();
            }}
          >
            <ArrowButton type="left" />
          </button>
        </div>

        <div className="flex-grow relative text-center flex justify-center items-center w-full h-[250px] md:h-[400px] h-[500px]">
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
              key={current}
              className="text-center"
              variants={Variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Testimonial
                testimonial={testimonials[current]}
                name={names[current]}
                face={faces[current]}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow for medium and larger screens */}
        <div className="hidden md:flex items-center pr-8">
          <button
            className="focus:outline-none z-20"
            disabled={isAnimating}
            onClick={async () => {
              await setIsAnimating(true);
              await setDirection(1);
              await handleNextSlide();
            }}
          >
            <ArrowButton type="right" />
          </button>
        </div>

        {/* Arrows for smaller screens */}
        <div className="flex md:hidden space-x-4 w-full justify-center">
          <button
            className="focus:outline-none z-20"
            disabled={isAnimating}
            onClick={async () => {
              await setIsAnimating(true);
              await setDirection(-1);
              await handlePrevSlide();
            }}
          >
            <ArrowButton type="left" />
          </button>
          <button
            className="focus:outline-none z-20"
            disabled={isAnimating}
            onClick={async () => {
              await setIsAnimating(true);
              await setDirection(1);
              await handleNextSlide();
            }}
          >
            <ArrowButton type="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
