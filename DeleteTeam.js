import React, { useState } from "react";
import axios from "axios";
import './styles.css'; // Import the CSS file

const DeleteTeam = () => {
  const [teamName, setTeamName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(`http://your-api-url/teams/${teamName}`);
    // Handle success or error
  };

  return (
    <div className="form-container">
      <h3>Delete Team</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Team Name" required />
        <button type="submit">Delete Team</button>
      </form>
    </div>
  );
};

export default DeleteTeam;
