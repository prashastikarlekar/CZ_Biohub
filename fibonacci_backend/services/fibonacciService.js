/** @format */

// services/fibonacciService.js

// This file contains functions to compute Fibonacci sequence up to a given number and store the sequence along with its values in database
// using the Fibonacci model.

const Fibonacci = require("../models/fibonacciModel");

async function computeFibonacci(n) {
	const result = [0, 1];

	for (let i = 2; i < n; i++) {
		const nextNumber = result[i - 1] + result[i - 2];
		result.push(nextNumber);
	}

	return result;
}

async function storeFibonacciInDatabase(n, fibonacciArray) {
	await Promise.all(
		fibonacciArray.map(async (value, index) => {
			await Fibonacci.create({ number: index + 1, value: value.toString() });
		})
	);
}

module.exports = { computeFibonacci, storeFibonacciInDatabase };
