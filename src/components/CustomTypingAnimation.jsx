import React, { useState, useEffect } from "react";

function CustomTypingAnimation({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0); // Reset currentIndex when text changes
  }, [text]);

  useEffect(() => {
    const typingSpeed = 25; // Adjust the typing speed as needed
    const animationInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(animationInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(animationInterval);
    };
  }, [text, currentIndex]);

  return (
    <div className="inline-block backdrop-blur-md backdrop-filter w-max font-base text-[#00FFE3] text-xs md:text-md lg:text-2xl tracking-wide border-2 border-solid border-[#00FFE3] rounded-full py-2 px-2 md:py-3 md:px-7 lg:py-8 lg:px-8">
      {displayText}
      <span className="animate-blink">_ &nbsp; &nbsp; &nbsp; &nbsp;</span>
    </div>
  );
}

export default CustomTypingAnimation;
