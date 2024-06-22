const Application = require("../models/Application");
const sendEmail = require("../utils/sendEmail");

exports.applyJob = async (req, res) => {
  const { jobId } = req.params;
  const { resume } = req.body;
  const application = new Application({
    job: jobId,
    applicant: req.user.userId,
    resume,
  });
  await application.save();

  // Send notification email to the employer
  sendEmail({
    to: "pp3662504@gmail.com",
    subject: "New Job Application",
    text: `A new application has been received for job ID: ${jobId}`,
  });

  res.status(201).send(application);
};
