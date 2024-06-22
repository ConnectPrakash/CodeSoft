import React, { useState, useEffect } from "react";
import axios from "axios";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await axios.get(
          "https://codesoft-4d3y.onrender.com/api/jobs/featured"
        );
        if (Array.isArray(response.data)) {
          setFeaturedJobs(response.data);
        } else {
          setError("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching featured jobs:", error);
        setError("Error fetching featured jobs");
      }
    };

    fetchFeaturedJobs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Featured Jobs</h2>
      <ul>
        {featuredJobs.map((job) => (
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

export default FeaturedJobs;
