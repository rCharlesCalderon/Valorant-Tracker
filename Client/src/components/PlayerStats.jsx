import { useContext, useEffect } from "react";
import { playerContext } from "../router/Router";

function PlayerStats() {
  const { playerData, setPlayerData } = useContext(playerContext);
  useEffect(() => {
    fetch();
  }, []);
  return <div></div>;
}

export default PlayerStats;
