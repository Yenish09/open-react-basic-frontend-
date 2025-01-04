import React, { useState } from "react";
import axios from "axios";
import './styles.css'; // Import the CSS file

const UpdateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [teamData, setTeamData] = useState({
    gamesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,
    year: new Date().getFullYear(),
  });

  const handleChange = (e) => {
    setTeamData({ ...teamData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://your-api-url/teams/${teamName}`, teamData);
    // Handle success or error
  };

  return (
    <div className="form-container">
      <h3>Update Team</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Team Name" required />
        {/* Add other fields similarly */}
        <button type="submit">Update Team</button>
      </form>
    </div>
  );
};

export default UpdateTeam;
