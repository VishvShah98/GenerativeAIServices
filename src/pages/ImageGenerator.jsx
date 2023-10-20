import CompaniesLoop from "../components/CompaniesLoop";
import ImageCarousel from "../components/ImageCarousel";
import TryItYourselfButton from "../components/Buttons/TryItYourselfButton";

function ImageGenerator() {
  return (
    <div  className="py-32">
      <div className="px-8 md:px-14 lg:px-48 overflow-hidden">
        <CompaniesLoop />
      </div>
      <div id="imageGenerator" className="md:flex text-white overflow-hidden  ">
        <div className=" md:w-1/2 px-8 md:px-14 lg:px-48 z-20  text-white space-y-8 flex flex-col  justify-center">
          <div className="text-[#8B898C] text-lg md:text-3xl lg:text-2xl">
            Generate
          </div>
          <div className="text-4xl md:text-6xl lg:text-8xl lg:w-[165%]">
            Unique Images For Your Designs
          </div>
          <div className="text-md md:text-xl lg:text-2xl lg:w-[150%]">
            Explore the infinite possibilities of generative AI to unlock new
            realms of visual creativity.
          </div>
          <div className="pb-8 md:pb-0">
            <TryItYourselfButton />
          </div>
        </div>
        <div className="md:w-1/2 px-8 md:px-0 flex justify-center">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;
