import videoState from "../state";
import main_video from "../assets/videos/video2ai.mp4";

function MainVideo() {
  return (
    <div className="relative">
      <video
        className="w-full h-full rounded-3xl border border-[#454247]"
        autoPlay
        loop
        muted
        onLoadedData={() => {
          videoState.isVideoLoaded = true;
        }}
      >
        <source src={main_video} type="video/mp4" />
      </video>
      <div className="absolute top-[10%] left-[10%] text-[#00FFE3] text-5xl md:text-8xl lg:text-[200px] font-black">
        Realize <span className="block text-white lg:pl-[25%]">Dreams</span>
      </div>
      <div className="absolute bottom-[10%] left-[10%] text-white text-md md:text-2xl lg:text-4xl ">
        Redefine the Boundaries <br /> of Visual Expression
      </div>
    </div>
  );
}

export default MainVideo;
