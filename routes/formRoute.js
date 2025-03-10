const express = require("express");
const { getData, createData } = require("../controller/formController");

const registerRoute = express.Router();

registerRoute.get("/", getData);

registerRoute.post("/create", createData);

module.exports = registerRoute;
