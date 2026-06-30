import { useRef, useState } from "react";
import "./Gate.css";

import logo from "../../assets/logo.png";
import corridorVideo from "../../assets/corridor.mp4";

function Gate({ onEnter, onOpen }) {

const [open, setOpen] = useState(false);
const [closing, setClosing] = useState(false);
const videoRef = useRef(null);
const handleOpen = () => {
setOpen(true);
onOpen();

if (videoRef.current) {
  videoRef.current.currentTime = 0;
  videoRef.current.play();
}
};

const handleVideoEnd = () => {
setClosing(true);

setTimeout(() => {
  onEnter();
}, 900);

};

return ( <div className={`gate-container ${
  closing ? "gate-closing" : ""
}`}>

  <video
    ref={videoRef}
    className={`intro-video ${
      open ? "video-show" : ""
    }`}
    muted
    playsInline
    preload="auto"
    onEnded={handleVideoEnd}
  >
    <source
      src={corridorVideo}
      type="video/mp4"
    />
  </video>

  <div className="video-glow"></div>

  <div
    className={`door left ${
      open ? "open-left" : ""
    }`}
  ></div>

  <div
    className={`door right ${
      open ? "open-right" : ""
    }`}
  ></div>

  {!open && (
    <div
      className="logo-wrapper"
      onClick={handleOpen}
    >
      <img src={logo} alt="" />
      <p>Touch To Open</p>
    </div>
  )}
</div>
);
}

export default Gate;
