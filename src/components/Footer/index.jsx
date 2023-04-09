import React from "react";
import "./footer.css";

import logo from "../../assets/img/logo.png";
import patreon from "../../assets/img/footer/patreon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container__left">
          <div className="footer__container__left__logo">
            <Link to="/">
              <img src={logo} alt="logo" draggable="false" />
            </Link>
            <div className="footer__container__left__logo__socials">
              <a
                href="https://twitter.com/fusionfsgg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/fusionfsgg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.youtube.com/fusionesports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a
                href="https://www.twitch.tv/fusionfsgg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitch"
              >
                <i className="fa-brands fa-twitch"></i>
              </a>

              <a
                href="https://www.tiktok.com/@fusionfsgg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__container__center">
          <div className="footer__container__center__column">
            <h3>teams</h3>
            <ul>
              <li>
                <Link aria-label="valorant" to="/teams/valorant">valorant</Link>
              </li>

              <li>
                <Link aria-label="valorant fem" to="/teams/valorant-x">valorant | fem</Link>
              </li>
              <li>
                <Link aria-label="fortnite" to="">fortnite</Link>
              </li>
              <li>
                <Link aria-label="csgo" to="">counter strike</Link>
              </li>
              <li>
                <Link aria-label="creators" to="">creators</Link>
              </li>
            </ul>
          </div>
          <div className="footer__container__center__column">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link aria-label="policies" to="">all terms and policies</Link>
              </li>
            </ul>
          </div>
          <div className="footer__container__center__column">
            <h3>More</h3>
            <ul>
              <li>
                <Link aria-label="contact" to="">contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__container__right">
          <img src={patreon} alt="" />
        </div>
      </div>
      <div className="footer__extra">
        <p>FUSION © 2023</p>
        <span>
          With ♥ by{" "}
          <a
            target="_blank"
            href="https://orlandomm.vercel.app"
            rel="noreferrer"
          >
            Orlando Mina
          </a>
        </span>
      </div>
    </footer>
  );
}
