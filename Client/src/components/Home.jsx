
import "../styles/App.css";

import canelVideo from "../video/canel.mp4";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";

function Home() {
  const [URL, setURL] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/testing", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setURL(data));
  }, []);
  return (
    <div style={{ display: "flex", position: "relative", minHeight: "100vh" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ width: "6vw", height: "100vh" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          border: "3px green solid",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "3px orange solid",
            width: "100%",
            height: "80vh",
            position: "relative",
          }}
        >
          <video
            loop
            muted
            autoPlay
            style={{
              position: "absolute",
              width: "100%",
              border: "1px blue solid",
              height: "auto",
            }}
          >
            <source src={canelVideo} type="video/mp4"></source>
          </video>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "0px",
              height: "100%",
              border: "2px purple solid",
              width: "100%",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <SearchBar />
            <h2 style={{ color: "#fffbf5" }}>OR</h2>
            <a
              href={URL}
              style={{
                width: "40%",
                height: "5vh",
                border: "none",
                borderRadius: "5px",
                background: "#FF4654",
                color: "white",
                fontWeight: 600,
                fontSize: "17px",
              }}
            >
              Riot Sign in
            </a>
            <span
              style={{
                textAlign: "left",
                width: "40%",
                color: "white",
                fontWeight: "600",
              }}
            >
              *By signing in with riot you acknowledge that your profile becomes
              public
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
