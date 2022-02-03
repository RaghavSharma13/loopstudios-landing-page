import React, { useState,useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import deepEarth from "./images/mobile/image-deep-earth.jpg";
import nightArcade from "./images/mobile/image-night-arcade.jpg";
import soccerTeam from "./images/mobile/image-soccer-team.jpg";
import theGrid from "./images/mobile/image-grid.jpg";
import upAbove from "./images/mobile/image-from-above.jpg";
import pocketBorealis from "./images/mobile/image-pocket-borealis.jpg";
import curiosity from "./images/mobile/image-curiosity.jpg";
import fisheye from "./images/mobile/image-fisheye.jpg";
import deepEarthDesk from "./images/desktop/image-deep-earth.jpg";
import nightArcadeDesk from "./images/desktop/image-night-arcade.jpg";
import soccerTeamDesk from "./images/desktop/image-soccer-team.jpg";
import theGridDesk from "./images/desktop/image-grid.jpg";
import upAboveDesk from "./images/desktop/image-from-above.jpg";
import pocketBorealisDesk from "./images/desktop/image-pocket-borealis.jpg";
import curiosityDesk from "./images/desktop/image-curiosity.jpg";
import fisheyeDesk from "./images/desktop/image-fisheye.jpg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";
import leader from "./images/mobile/image-interactive.jpg"
import leaderDesk from "./images/desktop/image-interactive.jpg"

const LandingPage = () => {
  const [desktopSize, setDesktopSize] = useState(false);
  const selectSize = () => {
    if (window.innerWidth >= 800) setDesktopSize(true);
    else setDesktopSize(false);
  };
  useEffect(()=>{selectSize()},[])
  window.addEventListener("resize", selectSize);
  return (
    <div className="landingPage">
      <section className="section--intro">
        <nav>
          <Navbar />
        </nav>
        <div className="intro--message">
          <ul>
            <li>Immersive</li>
            <li>experiences</li>
            <li>that</li>
            <li>deliver</li>
          </ul>
        </div>
      </section>
      <section className="about">
        <div className="imgCover">
          <img src={desktopSize?leaderDesk:leader} alt=""/>
        </div>
        <div className="about--text">
        <h1>the leader in interactive vr</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
        </div>
        
      </section>
      <section className="Creations">
        <h1>our creations</h1>
        <div className="creations--grid">
          <div className="projects">
            <img
              src={desktopSize ? deepEarthDesk : deepEarth}
              alt="Deep Earth"
            />
            <h2>Deep Earth</h2>
            <div className="overlay"></div>
          </div>
          <div className="projects">
            <img
              src={desktopSize ? nightArcadeDesk : nightArcade}
              alt="Night arcade"
            />
            <h2>Night Arcade</h2>
            <div className="overlay"></div>
          </div>
          <div className="projects">
            <img
              src={desktopSize ? soccerTeamDesk : soccerTeam}
              alt=" Soccer team VR"
            />
            <h2>Soccer Team VR</h2>
            <div className="overlay"></div>
          </div>
          <div className="projects">
            <img src={desktopSize ? theGridDesk : theGrid} alt="The grid" />
            <h2>The Grid</h2>
            <div className="overlay"></div>
          </div>
          <div className="projects">
            <img
              src={desktopSize ? upAboveDesk : upAbove}
              alt="From up above VR"
            />
            <h2>From Up Above VR</h2>
            <div className="overlay"></div>
          </div>
          <div className="projects">
            <img
              src={desktopSize ? pocketBorealisDesk : pocketBorealis}
              alt="Pocket borealis"
            />
            <h2>Pocket Borealis</h2>
            <div className="overlay"></div>
          </div>
          <div className="projects">
            <img
              src={desktopSize ? curiosityDesk : curiosity}
              alt="The curiosity"
            />
            <h2>The Curiosity</h2>
            <div className="overlay"></div>
          </div>
          <div className="projects">
            <img
              src={desktopSize ? fisheyeDesk : fisheye}
              alt="Make it fisheye"
            />
            <h2>Make it Fisheye</h2>
            <div className="overlay"></div>
          </div>
        </div>
        <button className="btn">see all</button>
      </section>
      <footer className="footer">
        <div className="footer--navLinks">
          <h2>loopstudios</h2>
          <div className="header--list small">
            <a href="#top">About</a>
            <a href="#top">Careers</a>
            <a href="#top">Events</a>
            <a href="#top">Products</a>
            <a href="#top">Support</a>
          </div>
        </div>
        <div className="footer--socials">
          <div className="social">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
          <h4>© 2021 Loopstudios. All rights reserved.</h4>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
