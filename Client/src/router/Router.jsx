import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerStats from "../components/PlayerStats";
import App from "../App";
import Leaderboard from "../components/Leaderboard";
import { createContext, useState } from "react";
const playerContext = createContext(null);

function AppRouter() {
  const [playerData, setPlayerData] = useState(null);
  return (
    <playerContext.Provider value={{ playerData, setPlayerData }}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>

          <Route
            path="/valorant/profile/:gametag/overview"
            element={<PlayerStats />}
          ></Route>
          <Route path="/valorant/leaderboard" element={<Leaderboard />}></Route> 
        </Routes>
      </Router>
    </playerContext.Provider>
  );
}

export { AppRouter, playerContext };
