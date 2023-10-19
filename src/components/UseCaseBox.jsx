import React from "react";

function UseCaseBox(props) {
  const { icon, title, description, HForLargeScreens } = props;

  return (
    <div
      className={`flex flex-col justify-center w-full h-full text-center md:text-left lg:text-left backdrop-blur-md backdrop-filter bg-white bg-opacity-5 rounded-3xl border border-[#454247] p-6 md:p-8 lg:p-12 space-y-2 md:space-y-5 lg:space-y-6 ${
        HForLargeScreens ? "lg:h-[110%]" : "h-full" // Apply py-5 for large screens if true
      }`}
    >
      <div className="text-[#00FFE3] text-xl md:text-4xl lg:text-5xl flex justify-center items-center md:justify-start">
        {icon}
      </div>
      <div className="text-[#00FFE3] text-xl md:text-4xl lg:text-5xl mb-2 ">
        {title}
      </div>
      <div
        className="text-white text-md md:text-2xl lg:text-3xl leading-7 md:leading-loose lg:leading-relaxed lg:w-[90%]"
      >
        {description}
      </div>
    </div>
  );
}

export default UseCaseBox;
