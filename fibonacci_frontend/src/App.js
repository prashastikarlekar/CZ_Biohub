/** @format */

import React, { useState } from "react";
import axios from "axios";
import Result from "./components/Result";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [showResultPage, setShowResultPage] = useState(false);
	const [fibonacciNumbers, setFibonacciNumbers] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:5000/fibonacci", {
				n: inputValue,
			});
			const fibonacciNumbers = response.data.fibonacciArray;
			setShowResultPage(true);
			setFibonacciNumbers(fibonacciNumbers);
		} catch (error) {
			console.error("Error fetching Fibonacci numbers:", error);
		}
	};

	return (
		<div className='App'>
			{showResultPage ? (
				<Result fibonacciNumbers={fibonacciNumbers} />
			) : (
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
			)}
		</div>
	);
}

export default App;
