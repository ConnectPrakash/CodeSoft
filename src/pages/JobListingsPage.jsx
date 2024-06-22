import React, { useState, useEffect } from "react";
import axios from "axios";

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://codesoft-4d3y.onrender.com/api/jobs"
        );
        if (Array.isArray(response.data)) {
          setJobs(response.data);
          console.log(response.data);
        } else {
          setError("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Error fetching jobs");
      }
    };

    fetchJobs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <a href={`/job/${job._id}`}>{job.title}</a>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingsPage;
