import "../styles/PlayerStats.css";
import Sidebar from "./Sidebar";
function PlayerStats() {
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
