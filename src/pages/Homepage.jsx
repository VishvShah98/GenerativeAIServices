import Navbar from "../components/Navbar";
import RequestAccessButton from "../components/Buttons/RequestAccessButton";
import GaisLogo from "../components/GaisLogo";
import MainVideo from "../components/MainVideo";

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
    </div>
  );
}

export default Homepage;
