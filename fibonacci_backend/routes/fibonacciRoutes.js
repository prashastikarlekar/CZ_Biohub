/** @format */

// routes/fibonacciRoutes.js

// This file defines an Express.js router for handling a POST request to '/fibonacci', where it computes the Fibonacci sequence up to a
//  given number 'n', stores the result in a database using the 'fibonacciService', and responds with the computed Fibonacci array.

const express = require("express");
const { Sequelize } = require("sequelize");
const router = express.Router();
const Fibonacci = require("../models/fibonacciModel.js");

const {
	computeFibonacci,
	storeFibonacciInDatabase,
} = require("../services/fibonacciService");

router.post("/fibonacci", async (req, res) => {
	try {
		const { n } = req.body;
		const existingNumber = await Fibonacci.findOne({ where: { number: n } });

		let fibonacciArray;
		if (existingNumber) {
			fibonacciArray = await Fibonacci.findAll({
				where: { number: { [Sequelize.Op.lte]: n } },
			});
			fibonacciArray = fibonacciArray.map((fibonacci) =>
				parseInt(fibonacci.value, 10)
			);
		} else {
			fibonacciArray = await computeFibonacci(n);
			await storeFibonacciInDatabase(n, fibonacciArray);
		}

		res.json({ fibonacciArray });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ error: "An error occurred while computing Fibonacci numbers." });
	}
});

module.exports = router;
