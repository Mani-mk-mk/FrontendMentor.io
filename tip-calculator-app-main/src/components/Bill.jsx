import React from "react";
import "../styles/Bill.css";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const Bill = ({ labelId, name, isBill, getter, setter }) => {
	const handleChange = (event) => {
		event.preventDefault();
		if (isBill) setter(parseFloat(event.target.value));
		else setter(parseInt(event.target.value));
	};

	const normalStyle = {
		backgroundImage: `url(${person})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "1.6rem",
		backgroundPosition: "5%",
		borderRadius: "8px",
	};

	const errorStyle = { ...normalStyle, outline: "2px solid orangered" };

	return (
		<div className="Bill">
			<div className="bill__container">
				<div className="label__container">
					<label htmlFor={labelId}>{name}</label>
					{getter === 0 && !isBill && (
						<label className="zero-people" htmlFor={"people"}>
							{"Can't be zero"}
						</label>
					)}
				</div>
				<div className="input__container">
					{isBill ? (
						<input
							className="bill__payable"
							style={{
								backgroundImage: `url(${dollar})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "1.6rem",
								backgroundPosition: "5%",
							}}
							type="number"
							step={0.01}
							value={getter}
							onChange={handleChange}
							placeholder="0"
							min={0}
						/>
					) : getter === 0 ? (
						<input
							className="bill__payable"
							style={errorStyle}
							type="number"
							value={getter}
							onChange={handleChange}
							placeholder="0"
							min={0}
						/>
					) : (
						<input
							className="bill__payable"
							style={normalStyle}
							type="number"
							value={getter}
							onChange={handleChange}
							placeholder="0"
							min={0}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Bill;
