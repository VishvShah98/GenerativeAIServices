import Navbar from "../components/Navbar";
import RequestAccessButton from "../components/Buttons/RequestAccessButton";
import GaisLogo from "../components/GaisLogo";
import MainVideo from "../components/MainVideo";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

function Homepage() {
  return (
    <div className="relative bg-top-radial ">
      <div className="flex text-white items-center px-4 py-4 md:px-14 md:py-10 lg:px-52 lg:py-12">
        <div className="flex-1">
          <GaisLogo />
        </div>
        <div className="flex-1 text-center">
          <Navbar />
        </div>
        <div className="flex-1 text-right">
          <RequestAccessButton />
        </div>
      </div>
      <div className="relative flex items-center justify-center px-4 md:px-14 lg:px-28">
        <MainVideo />
      </div>
      <div className="flex justify-between px-10 py-10 md:px-14 md:py-12 lg:px-52 lg:py-20">
        <div className="flex space-x-4 md: space-x-8 lg:space-x-8 text-white text-lg md:text-3xl lg:text-3xl">
          <a className="hover:text-[#00FFE3] cursor-pointer transition duration-300">
            <BiLogoFacebook />
          </a>
          <a className="hover:text-[#00FFE3] cursor-pointer transition duration-300">
            <BiLogoInstagram />
          </a>
        </div>
        <div className="uppercase text-[#BAB9BA] hover:text-white transition duration-300 cursor-pointer text-sm md:text-lg lg:text-xl">
          Scroll to learn more
        </div>
      </div>
    </div>
  );
}

export default Homepage;
