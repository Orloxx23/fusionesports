import React, { useEffect } from "react";
import "./videomodal.css";


export default function VideoModal({ open, setOpen, videoId, setVideoSelected }) {
  const [state, setState] = React.useState(false);

  useEffect(() => {
    setState(open);
  }, [open]);

  const onClosed = () => {
    setOpen(false);
    setVideoSelected({});
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className={state ? "videomodal" : "videomodal-hide"}>
      <div className="videomodal__close__button" onClick={onClosed}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="videomodal__back" onClick={onClosed}></div>
      <iframe
        className="videomodal__video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
