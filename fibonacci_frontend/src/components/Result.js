/** @format */

import React from "react";

function Result({ fibonacciNumbers }) {
	const fibonacciList = fibonacciNumbers.join(", ");

	return (
		<div>
			<h2>Fibonacci Numbers</h2>
			<p>{fibonacciList}</p>
		</div>
	);
}

export default Result;
