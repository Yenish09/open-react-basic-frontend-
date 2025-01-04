import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// Importing components
import AddTeam from "./AddTeam";
import UpdateTeam from "./UpdateTeams";
import DisplayTeamStats from "./DisplayTeamStats";
import DeleteTeam from "./DeleteTeam";
import DisplayTeams from "./DisplayTeams";
import AverageGoals from "./AverageGoals";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Add Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/update" className="nav-link">Update Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/display-stats" className="nav-link">Display Team Stats</Link>
              </li>
              <li className="nav-item">
                <Link to="/delete" className="nav-link">Delete Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/display-teams" className="nav-link">Display Teams</Link>
              </li>
              <li className="nav-item">
                <Link to="/average-goals" className="nav-link">Average Goals</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<AddTeam />} />
            <Route path="/update" element={<UpdateTeam />} />
            <Route path="/display-stats" element={<DisplayTeamStats />} />
            <Route path="/delete" element={<DeleteTeam />} />
            <Route path="/display-teams" element={<DisplayTeams />} />
            <Route path="/average-goals" element={<AverageGoals />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
