import React, { useEffect, useState } from "react";
import "./hashtag.css";
import "./hashtagMobile.css";

export default function Hashtag() {
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollX((window.scrollY)+300);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <section className="hashtag">
      <div
        style={{
          position: "absolute",
          transform: `translateX(${-scrollX / 2}px)`,
        }}
      >
        <p>#FEELTHEFUSION</p>
        <p>#FEELTHEFUSION</p>
        <p>#FEELTHEFUSION</p>
      </div>
    </section>
  );
}
