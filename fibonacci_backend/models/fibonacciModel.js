/** @format */

// models/fibonacciModel.js

// This file defines a Sequelize model for Fibonacci table, which represents Fibonacci numbers and their corresponding values.

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Fibonacci = sequelize.define("Fibonacci", {
	number: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true,
	},
	value: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Fibonacci;
