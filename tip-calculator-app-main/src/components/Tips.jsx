import React from "react";
import { useMemo, useEffect } from "react";
import "../styles/Tips.css";

const Tips = ({ tip, setTip, values }) => {
	// const tips = [5, 10, 15, 25, 50];

	const tips = useMemo(() => {
		return { ...values };
	}, [values]);

	useEffect(() => {
		// Object.keys(tips).forEach((tip) => {
		// 	tips[tip] = false;
		// });
	}, [tips]);

	const handleClick = (value) => {
		setTip(parseFloat(value).toFixed(2));
		Object.keys(tips).forEach((tip) => {
			tips[tip] = false;
		});
		tips[value] = true;
		console.log(tips);
	};

	const handleChange = (event) => {
		setTip(event.target.value);
	};

	const selectedStyle = {
		backgroundColor: "hsl(172, 67%, 45%)",
		color: "hsl(183, 100%, 15%)",
	};

	return (
		<div className="Tips">
			<div className="label">Select Tip %</div>
			<div className="tips__container">
				{Object.keys(tips).map((tip) => {
					return tips[tip] ? (
						<div
							id={tip}
							style={selectedStyle}
							onClick={() => handleClick(tip)}
							className="tip"
						>
							{tip}%
						</div>
					) : (
						<div id={tip} onClick={() => handleClick(tip)} className="tip">
							{tip}%
						</div>
					);
				})}

				<div className="tips__custom-input">
					<input
						onChange={handleChange}
						className="custom-tip"
						type="number"
						min={0}
						placeholder="Custom"
					/>
				</div>
			</div>
		</div>
	);
};

export default Tips;
