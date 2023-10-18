import Homepage from "./pages/Homepage";
import Discover from "./pages/Discover";
import ImageGenerator from "./pages/ImageGenerator";
import AiWritingTool from "./pages/AiWritingTool";
import Features from "./pages/Features";

import { useSnapshot } from "valtio";
import videoState from "./state";

function App() {
  const snapshot = useSnapshot(videoState);

  return (
    <div style={{ display: snapshot.isVideoLoaded ? "block" : "none" }}>
      <Homepage />
      <Discover />
      <ImageGenerator />
      <AiWritingTool />
      <Features />
    </div>
  );
}

export default App;
