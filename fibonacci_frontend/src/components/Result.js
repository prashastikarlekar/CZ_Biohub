/** @format */

import React from "react";

function Result({ setShowHome, fibonacciNumbers }) {
	const fibonacciList = fibonacciNumbers.join(", ");

	return (
		<div className='Result'>
			<h2>Fibonacci Numbers</h2>
			<p>{fibonacciList}</p>

			<button className='btn' onClick={() => setShowHome(false)}>
				Back
			</button>
		</div>
	);
}

export default Result;
