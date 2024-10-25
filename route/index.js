const userRoute = require("./user.route.js");
const express = require("express");
const router = express.Router();

router.use("/user", userRoute);

module.exports = userRoute;
