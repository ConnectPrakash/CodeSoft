import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ApplicationForm = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resume);
    await axios.post(
      `https://codesoft-4d3y.onrender.com/api/jobs/${id}/apply`,
      formData
    );
    alert("Application submitted successfully!");
  };

  return (
    <div>
      <h1>Apply for Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
          required
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
