const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword, role });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    
    res.status(404).send("Error", error.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Invalid email or password");
  }
  const token = jwt.sign({ userId: user._id, role: user.role }, "secretkey", {
    expiresIn: "1h",
  });
  res.status(200).send({ token });
};
