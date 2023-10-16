import CompaniesLoop from "../components/CompaniesLoop";
import ImageCarousel from "../components/ImageCarousel";
function ImageGenerator() {
  return (
    <div className="bg-center-radial py-32">
      <div className="px-8 md:px-14 lg:px-48 overflow-hidden">
        <CompaniesLoop />
      </div>
      <div className="md:flex  text-white overflow-hidden">
        <div className="md:w-1/2 md:pl-48 border border-red-500 z-20 bg-black">Left</div>
        <div className="md:w-1/2 border border-blue-500"><ImageCarousel /></div>
      </div>
    </div>
  );
}

export default ImageGenerator;
