// Register.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css"; // Import external CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("candidate");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://codesoft-4d3y.onrender.com/api/auth/register",
        {
          email,
          password,
          role,
        }
      );
      console.log(response.data);
      navigate("/login"); // Navigate to login page after successful registration
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="candidate">Candidate</option>
          <option value="employer">Employer</option>
        </select>
        <button type="submit">Register</button>
        <p>
          if you have already account <Link to="/login">Login</Link>
        </p>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
