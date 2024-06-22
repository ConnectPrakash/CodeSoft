// App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobListingsPage from "./pages/JobListingsPage";
import JobDetailPage from "./pages/JobDetailPage";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import ApplicationForm from "./pages/ApplicationForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css"; // Import external CSS file

const App = () => {
  return (
    <Router>
      <div className="container">
        <div>
          <h2>SpeedJob</h2>
        </div>
        <div>
          <Link to="/jobs" className="link">
            JobList
          </Link>
          <Link to="/employer/dashboard" className="link">
            Employer
          </Link>
          <Link to="/candidate/dashboard" className="link">
            Candidate
          </Link>
          <Link to="/apply/:jobId" className="link">
            Apply
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobListingsPage />} />
        <Route path="/job/:id" element={<JobDetailPage />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
