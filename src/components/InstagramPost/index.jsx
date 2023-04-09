import React from "react";
import "./instagrampost.css";

export default function InstagramPost({ post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="content-section__instagram__body__post"
      aria-label="Instagram Post"
    >
      <img
        src={post.img}
        alt=""
        className="content-section__instagram__body__post__img"
        draggable="false"
      />
    </a>
  );
}
