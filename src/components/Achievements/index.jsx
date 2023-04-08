import React from "react";
import "./achievements.css";

import logo from "../../assets/img/logo.png";

export default function Achievements({ events, loading }) {
  return (
    <section className="achievements">
      <h2>Event Placements</h2>
      <div className="achievements__body">
        {!loading ? (
          events
            ?.slice(0, 6)
            .map((event) => (
              <Achievement key={event.name} event={event} loading={loading} />
            ))
        ) : (
          <>
            <Achievement loading={loading} />
            <Achievement loading={loading} />
            <Achievement loading={loading} />
          </>
        )}
      </div>
    </section>
  );
}

function Achievement({ event, loading }) {
  return (
    <div className="achievement">
      <div
        className={`achievement__loading ${
          !loading ? "achievement__loading_onload" : ""
        }`}
      >
        <img src={logo} alt="" />
        <div className="player__card__loader"></div>
      </div>
      <div className="achievement__left">
        <h4>{event?.name}</h4>
        {event?.results?.map((result) => (
          <p key={result}>{result}</p>
        ))}
      </div>
      <div className="achievement__right">
        <p>{event?.year}</p>
      </div>
    </div>
  );
}
