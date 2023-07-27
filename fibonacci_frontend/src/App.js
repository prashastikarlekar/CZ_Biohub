/** @format */

import React, { useState } from "react";

function App() {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
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
