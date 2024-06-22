const express = require("express");
const {
  createJob,
  getJobs,
  getJob,
  getFeaturedJobs,
} = require("../controllers/jobController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createJob);
router.get("/", getJobs);
router.get("/:id", getJob);
router.get("/featured", getFeaturedJobs);

module.exports = router;
