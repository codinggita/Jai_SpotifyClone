import { useState } from "react";
import "./App.css";
import logo from "./assets/Spotify logo.png";
import home from "./assets/Home.png";
import search from "./assets/search.png";
import lib from "./assets/Your library.png";
import create from "./assets/Create.png";
import liked from "./assets/liked.png";
import podcast from "./assets/your episodes.png";
import install from "./assets/install.png";
import dream from "./assets/image11.png";
import arrow from "./assets/arrow.png";
import angel from "./assets/User.png";
import neffex from "./assets/image4.png";
import kd from "./assets/image3.png";
import girl from "./assets/image1.png";
import marsh from "./assets/image2.png";
import moti from "./assets/image9.png";
import moti1 from "./assets/image10.png";
import medi from "./assets/image8.png";
import words from "./assets/image7.png";
import alexa from "./assets/image6.png";
import story from "./assets/image5.png";
import heart from "./assets/heart1.png"
import player from "./assets/player.png"
import option from "./assets/options.png"
function LeftBar() {
  return (
    <>
     <div id="unique">
      <div className="allside">
        <div className="sidebar">
          <div className="logo">
            <img id="logo" src={logo} alt="no" />
          </div>
          <div className="search-bar">
            <div className="home">
              <button>
                <img src={home}></img>
                <div className="txt">Home</div>
              </button>
            </div>
            <div className="search">
              <button>
                <img src={search}></img> <div className="txt">Search</div>
              </button>
            </div>
            <div className="library">
              <button>
                <img src={lib}></img>
                <div className="txt"> Your Library</div>
              </button>
            </div>
          </div>
          <div className="playside">
            <div className="createplay">
              <button>
                <img src={create} alt="" />
                <div className="txt">Create Playlist</div>
              </button>
            </div>
            <div className="liked">
              <button>
                <img src={liked} alt="" />
                <div className="txt">Liked Songs</div>
              </button>
            </div>
            <div className="podcast">
              <button>
                <img src={podcast} alt="" />
                <div className="txt">Your Episode</div>
              </button>
            </div>
          </div>
          <div className="myplay">
            <button>Fav</button>
            <button>Daily Mix 1</button>
            <button>Punjabi</button>
            <button>Dance</button>
            <button>Edm</button>
          </div>
          <div className="install">
            <button>
              <img src={install} alt="" />
              Install App
            </button>
          </div>
        </div>
        <div className="downbar">
          <img className="dream" src={dream} alt="" />
          <span className="pos">Dreaming On 
            <br />
          </span>
          <span className="artist">NEFFEX</span>
          <img height={"15px"} className="heart" src={heart} alt="" />
          <img src={player} height={"70px"} className="player" alt="" />
          <img src={option} height= {"20px"} className="option" alt="" />
          <div className="green"><span className="last  ">Listening on Asus</span></div>
        </div>
        <div className="sidescreen">
          <div className="topbar">
            <div className="arrow">
              <img src={arrow} alt="" />
            </div>
            <div className="angel">
              <img src={angel} alt="" />
            </div>
          </div>
          <div className="gm">
            <h1>Good Morning</h1>
          </div>
          <div className="undergm">
            <div className="lscont">
              <img src={liked} className="gmimg" />
              <span className="text">Liked Songs</span>
            </div>
            <div className="neffex">
              <img src={neffex} className="gmimg" />
              <span className="text">Neffex</span>
            </div>
            <div className="kd">
              <img src={kd} className="gmimg" />
              <span className="text">Kd</span>
            </div>
            <div className="ls1">
              <img src={girl} className="gmimg" />
              <span className="text">Liked Songs</span>
            </div>
          </div>
          <div className="elec">
            <img src={marsh} className="gmimg" />
            <span className="text">Dance/electric</span>
          </div>
          <div className="showtolike">
            <h2>Shows you might Like</h2>
            <h4>SEE ALL</h4>
          </div>
          <div className="cards">
            <div className="moti">
              <img className="size" src={moti} alt="" />
              <p className="x">Weekly Motivatio.. </p>
            </div>
            <div className="medi">
              <img className="size" src={medi} alt="" />
              <p className="x">MEDITATION SELF</p>
            </div>
            <div className="words">
              <img className="size" src={words} alt="" />
              <p className="x">Words beyond act</p>
            </div>
            <div className="alexa">
              <img className="size" src={alexa} alt="" />
              <p className="x">The Alexa Show</p>
            </div>
            <div className="story">
              <img className="size" src={story} alt="" />
              <p className="x">The Stories of Ma..</p>
            </div>
            <div className="moti1">
              <img className="size" src={moti1} alt="" />
              <p className="x">Motivation Daily b..</p>
            </div>
          </div>
        </div>
      </div>
      //</div>
    </>
  );
}

export default LeftBar;
