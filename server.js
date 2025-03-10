require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const registerRoute = require("./routes/formRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/app/register", registerRoute);

const port = 4000;

const server = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server connected to mongoDB.`);
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.log(`Server is not connected to mongoDB`);
  }
};

server();
