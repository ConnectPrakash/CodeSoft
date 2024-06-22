const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  const { title, description, company, location } = req.body;
  const job = new Job({
    title,
    description,
    company,
    location,
    postedBy: req.user.userId,
  });
  await job.save();
  res.status(201).send(job);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).send(jobs);
};

exports.getJob = async (req, res) => {
  try {
    const jobId = req.params.id; // Assuming your route parameter is named id
    let job;

    if (jobId === "featured") {
      // Handle special case where you're fetching a "featured" job
      job = await Job.findOne({ specialField: "featured" }); // Adjust this query based on your schema
    } else {
      // Normal case where you're fetching by ObjectId
      job = await Job.findById(jobId);
    }

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs); // Ensure response is JSON array
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};
exports.getFeaturedJobs = async (req, res) => {
  try {
    const featuredJobs = await Job.find({ isFeatured: true }); // Adjust this query based on your schema

    if (!featuredJobs) {
      return res.status(404).json({ error: "Featured jobs not found" });
    }

    res.json(featuredJobs);
  } catch (error) {
    console.error("Error fetching featured jobs:", error);
    res.status(500).json({ error: "Server error" });
  }
};
