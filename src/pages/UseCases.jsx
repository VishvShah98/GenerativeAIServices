import React from "react";
import { motion } from "framer-motion";
import UseCaseBox from "../components/UseCaseBox";
import { IoBrushSharp } from "react-icons/io5";
import { RiBubbleChartFill } from "react-icons/ri";
import { TbBulbFilled } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";
import hexagon from "../assets/images/hexagon.webp";

const icons = [
  IoBrushSharp,
  RiBubbleChartFill,
  TbBulbFilled,
  BsFillShareFill,
  AiFillPrinter,
  BsFillCameraFill,
];
const titles = [
  "Digital Art",
  "Advertising",
  "Graphic Design",
  "Social Media Content",
  "Print on Demand",
  "Photography",
];
const descriptions = [
  "A real-time digital art generator that creates diverse images with just one click, spanning abstract, surrealistic, figurative, portrait, and landscape styles.",
  "An easy-to-use yet powerful solution for creating stunning and eye-catching images with just one click. Ideal for businesses in need of visual marketing content.",
  "Our services assist graphic designers in creating stunning imagery effortlessly, eliminating the need for expertise in pencil, brush, or Photoshop skills.",
  "Quickly generate eye-catching and distinctive images with a single click for promoting and sharing your product or service on social media.",
  "Generate unlimited artwork for print on demand products, adding visually stunning content and saving time and money.",
  "Generate unique artworks in a single click with this software tool that inspires your photographic journey, offering entirely new and truly inspirational creations.",
];

function UseCases() {
  return (
    <div className="relative bg-center-radial pb-20 pt-20 overflow-hidden">
      <div className="text-center pb-10 md:pb-20">
        <div className="relative text-[#8B898C] text-lg md:text-2xl lg:text-3xl font-semibold mb-2 pt-10 z-20">
          Use Cases
        </div>
        <div className="relative text-3xl md:text-6xl lg:text-8xl text-white mb-10 md:mb-20 z-20">
          Limitless Possibilities
        </div>
      </div>
      <div className="relative px-8 md:px-14 lg:px-48 z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {icons.map((icon, index) => (
            <UseCaseBox
              key={index}
              icon={React.createElement(icon)}
              title={titles[index]}
              description={descriptions[index]}
              HForLargeScreens={
                index === 0 || index === 3 || index === 4 // Apply py-5 for specific indices
              }
            />
          ))}
        </div>
      </div>
      <motion.div
      initial={{ y: 0, x: 0, scale: 1, opacity: 1 }}
      animate={{
        y: [0, 100, 0],
        x: [0, -100, 0],
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute  top-1/3 left-1/3 z-0"
      >
        <img
          className="z-0 w-full md:w-full lg:w-full"
          src={hexagon}
          alt="hexagon image"
        />
      </motion.div>
    </div>
  );
}

export default UseCases;
