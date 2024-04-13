
import "../styles/App.css";
import "../styles/Search.css";
import canelVideo from "../video/canel.mp4";


function Home() {
  function submitData(e) {
    e.preventDefault();
    let input = document.querySelector(".input-value").value;
    let encodeURL = encodeURIComponent(input);

    window.location = `/valorant/profile/${encodeURL}/overview`;
  }

  return (
    
    <div className="search-container">
      
      <video width="100%"  loop muted autoPlay className="val-video">
        <source src={canelVideo} type="video/mp4" ></source>
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
            className="dropdown-img"
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
            <img src="/images/search.png" alt="" className="search-icon-img" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
