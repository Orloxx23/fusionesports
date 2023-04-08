import React, { useEffect } from "react";
import "./playercard.css";

import logo from "../../assets/img/logo.png";

const noImgaStyle = {
  width: "50%",
  height: "50%",
  opacity: "0.2",
};

export default function PlayerCard({ img, user, name, country, tag, loading }) {
  const [playerImg, setPlayerImg] = React.useState("");
  const [noImg, setNoImg] = React.useState(false);

  useEffect(() => {
    if (loading) return;
    if (img.includes("owcdn")) {
      setPlayerImg("https://" + img.substring(2));
    } else {
      setNoImg(true);
      setPlayerImg(logo);
    }
  }, [img, loading]);

  return (
    <div className="team__member__player__card">
      <div
        className={`team__member__player__card__loading ${
          !loading ? "player__card__onload" : ""
        }`}
      >
        <img src={logo} alt="" />
        <div className="player__card__loader"></div>
      </div>
      <div className="team__member__player__card__image">
        <img
          src={playerImg}
          alt={user}
          draggable="false"
          style={noImg ? noImgaStyle : {}}
        />
      </div>
      <div className="team__member__player__card__info">
        <h3>
          {user}{" "}
          <img
            src={`https://flagcdn.com/16x12/${country ? country : "ve"}.png`}
            alt=""
            draggable="false"
          />
        </h3>
        <p>{name}</p>
        {tag && <span>{tag}</span>}
      </div>
    </div>
  );
}
