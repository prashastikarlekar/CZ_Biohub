/** @format */

import React, { useState } from "react";
import axios from "axios";

function App() {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:5000/fibonacci", {
				n: inputValue,
			});
			const fibonacciNumbers = response.data.fibonacciArray;
		} catch (error) {
			console.error("Error fetching Fibonacci numbers:", error);
		}
	};

	return (
		<div className='App'>
			<form onSubmit={handleSubmit}>
				<label>
					Enter a number (n):
					<input
						type='number'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						required
					/>
				</label>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;
