import React, { useEffect } from "react";
import "./videocard.css";
import moment from "moment/moment";

export default function VideoCard({ video, action }) {
  return (
    <div
      className="content-section__youtube__card"
      onClick={() => action(video)}
    >
      <img
        src={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.standard?.url || video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default.url}
        alt=""
        className="content-section__youtube__video"
      />
      <div className="content-section__youtube__text">
        <p className="content-section__youtube__title">{video.snippet.title}</p>
        <p className="content-section__youtube__timeago">
          {moment(video.snippet.publishedAt).fromNow()}
        </p>
      </div>
    </div>
  );
}
