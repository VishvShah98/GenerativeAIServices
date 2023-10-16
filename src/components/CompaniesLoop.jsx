import { motion } from "framer-motion";

import facebook from "../assets/images/facebooklogo.webp";
import oracle from "../assets/images/oraclelogo.webp";
import adobe from "../assets/images/adobelogo.webp";
import tesla from "../assets/images/teslalogo.webp";
import microsoft from "../assets/images/microsoftlogo.webp";
import google from "../assets/images/googlelogo.webp";

const logos = [
  facebook,
  oracle,
  adobe,
  tesla,
  microsoft,
  google,
  facebook,
  oracle,
  adobe,
  tesla,
  microsoft,
  google,
];
const smallLogos = [facebook, oracle, adobe, tesla, microsoft, google];

const calculateDelay = (index) => {
  if (window.innerWidth > 1300) {
    // If window.innerWidth is greater than 1300px, use 'index' as the delay
    return index * 0.5;
  } else if (window.innerWidth > 768 && window.innerWidth < 1300) {
    // If not, use 0.4 * 'index' as the delay
    return 0.45 * index;
  } else {
    return index;
  }
};

const numberOfLogos = () => {
  if (window.innerWidth > 1300) {
    // If window.innerWidth is greater than 1300px, use 'index' as the delay
    return logos;
  } else if (window.innerWidth > 768 && window.innerWidth < 1300) {
    // If not, use 0.4 * 'index' as the delay
    return logos;
  } else {
    return smallLogos;
  }
};

function CompaniesLoop() {
  return (
    <>
      <div className=" text-[#8B898C] text-lg md:text-3xl lg:text-2xl">
        Trusted by
      </div>
      <div className="flex pb-24 lg:pb-56">
        {numberOfLogos().map((logo, index) => (
          <motion.div
            initial={{ x: window.innerWidth }}
            key={index}
            animate={{ x: -window.innerWidth }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              delay: calculateDelay(index),
            }}
            className="py-16"
          >
            <img
              src={logo}
              className="h-full w-full"
              alt={`${logo} logo`}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default CompaniesLoop;
