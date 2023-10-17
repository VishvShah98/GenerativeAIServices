import React from "react";

function WritingToolBox(props) {
  const { title, description } = props;

  return (
    <div className="w-full h-full backdrop-blur-md backdrop-filter bg-white bg-opacity-5 rounded-3xl border border-[#454247] p-6 md:p-8 lg:p-12 space-y-2 md:space-y-5 lg:space-y-6">
      <div className="text-[#00FFE3] text-xl md:text-4xl lg:text-5xl mb-2 ">
        {title}
      </div>
      <div className="text-white text-md md:text-2xl lg:text-3xl ">
        {description}
      </div>
    </div>
  );
}

export default WritingToolBox;
