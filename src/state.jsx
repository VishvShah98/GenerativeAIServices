import { proxy } from 'valtio';

const videoState = proxy({
  isVideoLoaded: false
});

export default videoState;
