import React from "react";
import WritingToolBox from "../components/WritingToolBox";
import TryItYourselfButton from "../components/Buttons/TryItYourselfButton";
import { motion } from "framer-motion";
import cylinder from "../assets/images/cylinder.webp";
import pyramid from "../assets/images/pyramid_top.webp";

const titles = [
  "Website Copy",
  "Blog Content",
  "Social Media Content",
  "Sales Copy",
];
const descriptions = [
  "Revamp your website with captivating copy that leaves a lasting impression",
  "Craft high-quality blog content in a fraction of the time",
  "Craft engaging and impactful social media copy that resonates with your target audience",
  "Create persuasive sales copy that drives conversions and boosts your revenue",
];

function AiWritingTool() {
  return (
    <div  className="relative overflow-hidden  md:pb-20 pt-20">
      <div className="text-center pb-10 md:pb-20">
        <div id="writingTool" className="relative text-[#8B898C] text-lg md:text-2xl lg:text-3xl font-semibold mb-2 pt-10 z-20">
          AI Writing Tool
        </div>
        <div className="relative text-3xl md:text-6xl lg:text-8xl text-white mb-10 md:mb-20 z-20">
          Get Better Copy
        </div>
      </div>
      <div className="relative px-8 md:px-14 lg:px-48 md:space-y-12 z-20">
        {titles.map((title, index) => (
          <div
            key={index}
            className={`mb-4 w-full md:w-2/3 text-center md:text-left ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
            <WritingToolBox title={title} description={descriptions[index]} />
          </div>
        ))}
      </div>
      <div className="relative text-center py-10 md:py-20">
        <div className=" mx-auto w-2/3 md:w-full text-2xl py-10 md:text-4xl lg:text-4xl text-white">
          Try our Generative AI Writing Tool Today!
        </div>
        <div>
          <TryItYourselfButton />
        </div>
      </div>
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: [0, 100, 0], x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 md:top-36 left-0 z-0"
      >
        <img
          className="z-0 w-1/2 md:2/3 lg:w-full"
          src={cylinder}
          alt="cylinder image"
        />
      </motion.div>
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: [0, 100, 0], x: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -right-1/2 top-1/2 md:-right-10 md:top-1/2 z-0"
      >
        <img
          className="z-0 w-1/2 md:w-1/2 lg:w-full"
          src={pyramid}
          alt="pyramid image"
        />
      </motion.div>
    </div>
  );
}

export default AiWritingTool;
