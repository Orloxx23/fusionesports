import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import "./teams.css";
import "swiper/css";

import valorant from "../../assets/img/teams/valorant.webp";
import gamechangers from "../../assets/img/teams/gamechangers.jpg";
import fortnite from "../../assets/img/teams/fortnite.jpg";
import creators from "../../assets/img/teams/creators.jpg";
import csgo from "../../assets/img/teams/csgo.jpg";
import TeamCard from "../TeamCard";

const teams = [
  {
    name: "valorant",
    background: valorant,
    url: "/teams/valorant",
  },
  {
    name: "valorant | game changers",
    background: gamechangers,
    url: "/teams/valorant-x",
  },
  {
    name: "fortnite",
    background: fortnite,
    url: "/teams/fortnite",
  },
  {
    name: "counter strike",
    background: csgo,
    url: "/teams/csgo",
  },
  {
    name: "content creators",
    background: creators,
    url: "/teams/creators",
  },
];

export default function Teams() {
  return (
    <section className="teams">
      <h1>MEET OUR TEAMS</h1>

      <Swiper
        slidesPerView={3.4}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="teams__container onlyDesktop"
      >
        {teams.map((team) => (
          <SwiperSlide key={team.name}>
            <TeamCard img={team.background} text={team.name} url={team.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={1.4}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="teams__container onlyMobile"
      >
        {teams.map((team) => (
          <SwiperSlide key={team.name}>
            <TeamCard img={team.background} text={team.name} url={team.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
