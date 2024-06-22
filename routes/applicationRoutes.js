const express = require("express");
const { applyJob } = require("../controllers/applicationController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/:jobId/apply", authMiddleware, applyJob);

module.exports = router;
