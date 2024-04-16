import { useEffect } from "react";
import "../styles/App.css";
import "../styles/Leaderboard.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import {BarsScaleFade} from "react-svg-spinners"

function Leaderboard() {
  const [actData,setActData] = useState(null)
  const [playerLeaderboard,setPlayerLeaderboard] = useState([])
  const [page,setPage] = useState(0)

  function handlePageButton(pageNum){
    //to give a animation effect 
      setPlayerLeaderboard([])
    setPage(page => page + pageNum)
  }

  useEffect(()=>{
  
        fetch(
          `https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/22d10d66-4d2a-a340-6c54-408c7bd53807?size=15&startIndex=${page}&api_key=RGAPI-4c438e09-40fc-4f67-a92c-5e3ceb45396f`
        )
          .then((res) => res.json())
          .then((data) => {
            setActData(data);

            setPlayerLeaderboard(data.players);
          });
  
  
  },[page])
  return (
    <div className="leaderboard">
      <Sidebar />

      <div className="leaderboard-page-container">
        <div className="filler-div"> </div>
        <div className="leaderboard-container">
          {actData ? (
            <>
              <div className="leaderboard-header">
                <div className="leaderboard-img">
                  <img
                    src="../images/radiant-badge.png"
                    alt=""
                    className="radiant-badge"
                  ></img>
                </div>
                <div className="leaderboard-title">
                  <div className="rank-title">
                    <span>LEADERBOARD</span>
                    <span>RADIANT</span>
                  </div>
                  <img
                    src="../images/dropdown.png"
                    alt=""
                    className="dropdown-img"
                  ></img>
                </div>
                <div className="act-dropdown">
                  <span>ACT 2</span>
                  <img
                    src="../images/dropdown.png"
                    alt=""
                    className="dropdown-img"
                  ></img>
                </div>
              </div>
              <div className="leaderboard-info">
                <div className="leaderboard-info-rank-title">
                  <span>RANK</span>
                </div>
                <div className="leaderboard-info-rating-title">RATING </div>
                <div className="leaderboard-info-act-title">ONGOING </div>
              </div>
              {playerLeaderboard && console.log(playerLeaderboard)}
              {playerLeaderboard.length > 0 ? playerLeaderboard.map((obj, index) => (
                <div
                  className="player-container"
                  key={index}
                  style={{
                    animation: `fadeIn 0.2s ease-in ${index * 0.05}s forwards`,
                  }}
                >
                  <div className="player-number">{obj.leaderboardRank}</div>
                  <div className="player-rating-container">
                    <div className="player-rating">
                      
                      <img
                        src={
                          obj.competitiveTier === 27
                            ? "../images/radiant-badge.png"
                            : obj.competitiveTier === 26
                            ? "../images/immortal-badge.png"
                            : ""
                        }
                        alt=""
                      ></img> 
                    {obj.rankedRating}
                  
                    </div>
                    <span>{obj.gameName}</span>
                    <span>#{obj.tagLine}</span>
                  </div>
                  <div className="player-games">
                    {obj.numberOfWins} GAMES WON
                  </div>
                </div>
              )) : <BarsScaleFade/>}
              <div className="change-page-container">
                <button
                  className="change-button"
                  onClick={() => handlePageButton(18)}
                >
                  <img
                    src="../images/play-and-pause-button-back.png"
                    alt=""
                  ></img>
                </button>
                <button
                  className="change-button"
                  disabled={page <= 0}
                  onClick={() => handlePageButton(-15)}
                >
                  <img
                    src="../images/play-button-arrowhead-back.png"
                    alt=""
                  ></img>
                </button>
                <button className="change-button">Page</button>
                <button
                  className="change-button"
                  onClick={() => handlePageButton(15)}
                >
                  <img
                    src="../images/play-button-arrowhead-forward.png"
                    alt=""
                  ></img>
                </button>
                <button
                  className="change-button"
                  onClick={() => handlePageButton(18)}
                >
                  <img
                    src="../images/play-and-pause-button-forward.png"
                    alt=""
                  ></img>
                </button>
              </div>
            </>
          ) : (
            <div
              style={{
                height: "76vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BarsScaleFade height="10%" width="10%" border />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;

  