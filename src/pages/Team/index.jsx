import React, { useEffect } from "react";
import "./team.css";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import {
  Achievements,
  PlayerCard,
  TeamCoverpage,
  Teams,
} from "../../components";
import { getValorantTeam } from "../../api";
import LoadingScreen from "../../components/LoadingScreen";

export default function Team() {
  let { id } = useParams();
  
  const [gameTitle, setGameTitle] = React.useState("");
  const [team, setTeam] = React.useState({});
  const [getting, setGetting] = React.useState(true);

  const [loading, setLoading] = React.useState(true);
  const [elements, setElements] = React.useState(0);
  const [elementsLoaded, setElementsLoaded] = React.useState(0);

  const loadElement = () => {
    setElementsLoaded(elementsLoaded + 1);
  };

  useEffect(() => {
    setElements(1);
  }, []);

  useEffect(() => {
    switch (id) {
      case "valorant":
        setGameTitle("Valorant");
        break;
      case "csgo":
        setGameTitle("CS:GO");
        break;
      case "valorant-x":
        setGameTitle("Valorant: Game Changers");
        break;
      case "fortnite":
        setGameTitle("Fortnite");
        break;
      default:
        setGameTitle("");
    }
  }, [id]);

  useEffect(() => {
    (async () => {
      setGetting(true);
      if (id === "valorant-x") {
        const team = await getValorantTeam(8310);
        setTeam(team);
      }

      if (id === "valorant") {
        const team = await getValorantTeam(7269);
        setTeam(team);
      }

      loadElement();
      setGetting(false);
    })();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Fusion eSports | {gameTitle}</title>
      </Helmet>

      <section className="team">
        <TeamCoverpage gameTitle={gameTitle} />
        <div className="team__body">
          <div className="team__members">
            <div className="team__members__players">
              <h2>Team</h2>
              {!getting ? (
                team?.players &&
                team.players.map((player) => (
                  <PlayerCard
                    key={player.url}
                    user={player.user}
                    name={player.name}
                    country={player.country}
                    img={player.img}
                  />
                ))
              ) : (
                <>
                  <PlayerCard loading={getting} />
                  <PlayerCard loading={getting} />
                  <PlayerCard loading={getting} />
                  <PlayerCard loading={getting} />
                  <PlayerCard loading={getting} />
                </>
              )}
            </div>
            <div className="team__members__players">
              <h2>Staff</h2>
              {!getting ? (
                team?.staff &&
                team.staff.map((player) => (
                  <PlayerCard
                    key={player.url}
                    user={player.user}
                    name={player.name}
                    country={player.country}
                    tag={player.tag}
                    img={player.img}
                  />
                ))
              ) : (
                <>
                  <PlayerCard loading={getting} />
                  <PlayerCard loading={getting} />
                </>
              )}
            </div>
          </div>
          <div className="team__right">
            <Achievements events={team?.events} loading={getting} />
          </div>
        </div>
      </section>
      <Teams />

      <LoadingScreen
        loading={loading}
        setLoading={setLoading}
        elements={elements}
        elementsLoaded={elementsLoaded}
      />
    </>
  );
}
