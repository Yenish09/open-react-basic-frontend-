import React, { useState } from "react";
import axios from "axios";
import './styles.css'; 

const AddTeam = () => {
  const [teamData, setTeamData] = useState({
    teamName: "",
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
    await axios.post("http://your-api-url/teams", teamData);
    // Handle success or error
  };

  return (
    <div className="form-container">
      <h3>Add Team</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="teamName" onChange={handleChange} placeholder="Team Name" required />
        {/* Add other fields similarly */}
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
};

export default AddTeam;
