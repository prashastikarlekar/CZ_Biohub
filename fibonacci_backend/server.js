/** @format */

// server.js

// This file sets up an Express server that listens for incoming HTTP requests, includes middleware for JSON parsing, defines routes for
// Fibonacci calculations, and connects to database using Sequelize to start the server on a specified port.

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const fibonacciRoutes = require("./routes/fibonacciRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/", fibonacciRoutes);

// Start the server
async function startServer() {
	try {
		await sequelize.authenticate();
		await sequelize.sync(); // Create tables if they do not exist
		app.listen(PORT, () => {
			console.log(`Server started on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

startServer();
