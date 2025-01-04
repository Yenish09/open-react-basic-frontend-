import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'; 

const DisplayTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get("http://your-api-url/teams?limit=10");
      setTeams(response.data);
    };
    fetchTeams();
  }, []);

  return (
    <div>
      <h3>First 10 Teams</h3>
      <ul>
        {teams.map((team) => (
          <li key={team.teamName}>
            {team.teamName} - Games Played: {team.gamesPlayed}, Wins: {team.wins}, Draws: {team.draws}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTeams;
