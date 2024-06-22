import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await axios.get(
        `https://codesoft-4d3y.onrender.com/api/jobs/${id}`
      );
      setJob(response.data);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <a href={`/apply/${job._id}`}>Apply Now</a>
    </div>
  );
};

export default JobDetailPage;
