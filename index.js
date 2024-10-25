const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./route/index");

// Parsing the body of the request
app.use(express.json());

app.get("/", () => {
	console.log("Hello");
});
app.use("/v1", routes);

//Listening to a port
app.listen(process.env.PORT, () => {
	console.log(`Connected to PORT: ${process.env.PORT}`);
});
