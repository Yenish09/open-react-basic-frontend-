import React, { useState } from "react";
import axios from "axios";
import './styles.css'; // Import the CSS file

const AverageGoals = () => {
  const [year, setYear] = useState("");
  const [teams, setTeams] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://your-api-url/teams/average-goals?year=${year}`);
    setTeams(response.data);
  };

  return (
    <div className="form-container">
      <h3>Get Average Goals</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
        <button type="submit">Get Average Goals</button>
      </form>
      {teams.length > 0 && (
        <div>
          <h3>Teams with Average Goals for {year}</h3>
          <ul>
            {teams.map((team) => (
              <li key={team.teamName}>
                {team.teamName} - Average Goals For: {team.averageGoalsFor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AverageGoals;