import { useState, useContext } from "react";
import "../styles/App.css";
import "../styles/Search.css";
import canelVideo from "../video/canel.mp4";
import { Link } from "react-router-dom";
import { playerContext } from "../router/Router";

function Home() {
  const { playerData, setPlayerData } = useContext(playerContext);

  function submitData(e) {
    e.preventDefault();
    let input = document.querySelector(".input-value").value;

    fetch("http://localhost:3000/ValorantGamertag", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputData: input,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlayerData(data);
      });
  }

  return (
    <div className="search-container">
      <video width="100%" loop muted autoPlay className="val-video">
        <source src={canelVideo} type="video/mp4"></source>
      </video>
      <h1>COME UP WIH A TITLE </h1>
      <form className="search-input" method="POST">
        <div className="search-input-valorant">
          <img
            src="/images/V_Logomark_Red.png"
            alt=""
            className="search-input-valorant-img"
          ></img>
          <span>Valorant</span>
          <img
            src="/images/dropdown.png"
            alt=""
            className="search-input-valorant-img"
          ></img>
        </div>
        <div className="input-value-container">
          <input
            type="text"
            className="input-value"
            placeholder="Search for Anyone"
            name="searchPlayer"
          />
          <button
            type="submit"
            className="search-icon-button"
            onClick={submitData}
          >
            <Link to={"/valorant/profile/:gametag/overview"}>
              {" "}
              <img
                src="/images/search.png"
                alt=""
                className="search-icon-img"
              />
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
