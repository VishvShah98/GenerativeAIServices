import Homepage from "./pages/Homepage";
import Discover from "./pages/Discover";
import ImageGenerator from "./pages/ImageGenerator";
import AiWritingTool from "./pages/AiWritingTool";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import Examples from "./pages/Examples";
import Testimonials from "./pages/Testimonials";

import { useSnapshot } from "valtio";
import videoState from "./state";

function App() {
  const snapshot = useSnapshot(videoState);

  return (
    <div style={{ display: snapshot.isVideoLoaded ? "block" : "none" }}>
      <Homepage />
      <Discover />
      <div className="bg-center-radial">
        <ImageGenerator />
        <AiWritingTool />
        <Features />
      </div>
      <UseCases />
      <div className="bg-center-radial">
        <Examples />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
