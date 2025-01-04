import React, { useState } from "react";
import axios from "axios";
import './styles.css'; // Import the CSS file

const DisplayTeamStats = () => {
  const [teamName, setTeamName] = useState("");
  const [stats, setStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://your-api-url/teams/${teamName}`);
    setStats(response.data);
  };

  return (
    <div className="form-container">
      <h3>Display Team Stats</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Team Name" required />
        <button type="submit">Get Stats</button>
      </form>
      {stats && (
        <div>
          <h3>Stats for {teamName}</h3>
          <p>Games Played: {stats.gamesPlayed}</p>
          <p>Wins: {stats.wins}</p>
          <p>Draws: {stats.draws}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayTeamStats;
