/** @format */

// config/database.js

// This configuration file exports a Sequelize instance that connects this application to PostgreSQL database.

const { Sequelize } = require("sequelize");

// Create a new Sequelize instance with the provided database credentials.
const sequelize = new Sequelize("fibonacci_db", "postgres", "root", {
	host: "localhost",
	dialect: "postgres",
});

module.exports = sequelize;
