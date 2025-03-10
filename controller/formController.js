const registerRoute = require("../models/formModel");

const getData = async (req, res) => {
  const personData = await registerRoute.find({});
  res.status(200).json({ personData });
};

const createData = async (req, res) => {
  try {
    const { name, email, username } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Please provide a title." });
    }
    if (!email) {
      return res.status(400).json({ message: "Please provide description." });
    }
    if (!username) {
      return res.status(400).json({ message: "Choose a tags." });
    }

    const personData = await registerRoute.create(req.body);

    res.status(201).json({
      message: `Welcome and Thank you for signing up ${name}`,
      personData,
    });
  } catch (error) {
    res.status(500).json({ error: "Username, Name and Email are required" });
  }
};

module.exports = { getData, createData };
