import { useEffect } from "react";

import { useParams } from "react-router-dom";
import "../styles/PlayerStats.css";
import Sidebar from "./Sidebar";
function PlayerStats() {
  let gamerTag = useParams();

  useEffect(() => {
    fetch(
      `https://valorant-tracker-production-ffb1.up.railway.app/ValorantID`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player: gamerTag,
        }),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="playerStats-container">
      <Sidebar />
      <div className="info-container">
        <div className="gamemode-container info-nav">
          <div className="game-type">
            <span>Game mode</span>
            <span>COMPETITIVE</span>
          </div>
          <img
            src="/images/down-arrow.png"
            alt=""
            className="dropdown-img"
          ></img>
        </div>
        <div className="gamemode-container info-nav">
          <div className="game-type">
            <span>Episode and Act</span>
            <span>E6:A2</span>
          </div>
          <img
            src="/images/down-arrow.png"
            alt=""
            className="dropdown-img"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats;
