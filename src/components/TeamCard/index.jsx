import React from "react";
import { useNavigate } from "react-router-dom";

import "./teamcard.css";
import "./teamcardMobile.css";

export default function TeamCard({ img, text, url }) {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = React.useState(true);

  React.useEffect(() => {
    if (text === "fortnite" || text === "content creators" || text === "counter strike") {
      setIsAllowed(false);
    }
  }, [text]);

  const goToTeam = () => {
    if (isAllowed) {
      navigate(url);
    }
  };

  return (
    <div
      className="team__card"
      style={{
        cursor: !isAllowed ? "not-allowed" : "pointer",
      }}
      onClick={() => goToTeam()}
    >
      <img src={img} alt="" className="team__card__background" />
      <p className="team__card__text">{text}</p>
    </div>
  );
}
