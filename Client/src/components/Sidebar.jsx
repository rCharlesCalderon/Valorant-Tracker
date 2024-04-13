import "../styles/App.css";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/images/V_Logomark_Red.png" alt="" className="val-logo"></img>
      <div className="nav">
        <div className="logo-container" onClick={()=> window.location = "/"}>
          <img src="/images/home.png" alt="" className="home-logo"></img>
        </div>
        <div className="logo-container" onClick={() => window.location = "/valorant/leaderboard"}>
          <img src="/images/leaderboard.png" alt="" className="home-logo"></img>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
