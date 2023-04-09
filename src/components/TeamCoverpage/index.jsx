import React from "react";

import "./teamcoverpage.css";

import valorant from "../../assets/img/teams/valorant.webp";
import csgo from "../../assets/img/teams/csgo.jpg";
import fortnite from "../../assets/img/teams/fortnite.jpg";
import valorantx from "../../assets/img/teams/gamechangers.jpg";

export default function TeamCoverpage({ gameTitle }) {
  const [background, setBackground] = React.useState();

  React.useEffect(() => {
    switch (gameTitle) {
      case "Valorant":
        setBackground(valorant);
        break;
      case "CS:GO":
        setBackground(csgo);
        break;
      case "Valorant: Game Changers":
        setBackground(valorantx);
        break;
      case "Fortnite":
        setBackground(fortnite);
        break;
      default:
        setBackground("");
    }
  }, [gameTitle]);

  return (
    <section className="coverpage">
      <img
        className="coverpage__background"
        src={background}
        alt=""
      />
      <p>{gameTitle}</p>
    </section>
  );
}
