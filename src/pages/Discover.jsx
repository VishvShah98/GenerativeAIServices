import cube from "../assets/images/cube.webp";
import hexagon from "../assets/images/hexagon.webp";
import { motion } from "framer-motion";

const cubeVariants = {
  initial: {
    x: 0, // Initial horizontal position
    y: 100, // Initial vertical position
  },
  animate: {
    x: [0, -100, 0], // Define the horizontal animation sequence (left, right, back to the center)
    y: [100], // Define the vertical animation sequence (up, down, back to the center)
    transition: {
      duration: 10, // Total duration of the animation loop
      repeat: Infinity, // Repeat the animation infinitely
      ease: "linear", // Linear easing for continuous motion
    },
  },
};

const hexagonVariants = {
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

function Discover() {
  return (
    <div className="bg-center-radial pb-24">
      <div className="flex justify-between">
        <div></div>
        <motion.div
          variants={cubeVariants}
          initial="initial"
          animate="animate"
          className="z-20"
        >
          <img
            className="relative left-[50%] md:left-0 mb-12 md:mb-0  w-2/4 md:w-full"
            src={cube}
          ></img>
        </motion.div>
      </div>
      <div className="z-10 relative flex items-center justify-center px-4 md:px-14 lg:px-28">
        <div className="w-full h-full backdrop-blur-md backdrop-filter bg-white bg-opacity-5 rounded-3xl border border-[#454247] text-white text-3xl p-6 md:text-6xl md:p-24  lg:text-9xl lg:p-20">
          Discover a World of
          <span className="text-[#00FFE3]"> Limitless Artistic Potential</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <motion.div
            variants={hexagonVariants}
            initial="initial"
            animate="animate"
            className="z-0"
          >
            <img className=" md:w-full" src={hexagon}></img>
          </motion.div>
          <div className="text-white pt-10 md:pt-20 lg:pt-28 px-4 md:px-14 lg:px-48  text-md md:text-2xl lg:text-4xl w-[150%] md:w-2/3 lg:w-1/2">
            Explore the infinite possibilities of generative AI to unlock new
            realms of visual creativity.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
