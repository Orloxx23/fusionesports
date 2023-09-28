import React from "react";
import "./streams.css";

export default function Streams() {
  return (
    <div className="streams_container">
      <iframe
        className="streams_iframe"
        src="https://mywidgets-alpha.vercel.app/twitch/streamers?team=fusionesports"
      ></iframe>
    </div>
  );
}
