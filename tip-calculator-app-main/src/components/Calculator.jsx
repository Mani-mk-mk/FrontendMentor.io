import React, { useState } from "react";
import Bill from "./Bill";
import Tips from "./Tips";
import "../styles/Calculator.css";
import { useEffect } from "react";

const Calculator = () => {
	const [bill, setBill] = useState("");
	const [person, setPerson] = useState("");
	const [tip, setTip] = useState("");
	const [values, setValues] = useState({
		5: false,
		10: false,
		15: false,
		25: false,
		50: false,
	});
	const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
	const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);

	const resetValues = () => {
		setBill("");
		setPerson("");
		setTip("");
		setTipAmountPerPerson(0);
		setTotalAmountPerPerson(0);
		setValues({ 5: false, 10: false, 15: false, 25: false, 50: false });
	};

	useEffect(() => {
		if (person === 0) {
			setTipAmountPerPerson(0);
			setTotalAmountPerPerson(0);
		}

		if (tip === "") {
			return;
		}

		setTipAmountPerPerson(() => {
			const amount = (tip * bill) / 100;
			if (person === "") return amount;
			else return amount / person;
		});

		if (bill === "" || bill === 0) {
			setTipAmountPerPerson(0);
			return;
		}

		setTotalAmountPerPerson(() => {
			const amount = bill + (tip * bill) / 100;
			if (person === "") return amount;
			else return amount / person;
		});
	}, [bill, person, tip, tipAmountPerPerson]);

	useEffect(() => {
		// console.log("Tip Amount: " + tipAmountPerPerson);
		// console.log("Total Amount: " + totalAmountPerPerson);
		// console.log("Tip changed to: " + tip);
	}, [totalAmountPerPerson, tipAmountPerPerson]);

	return (
		<div className="Calculator">
			<main className="calculator">
				<div className="calculator__controller">
					<Bill
						getter={bill}
						setter={setBill}
						labelId="bill"
						name="Bill"
						isBill={true}
					/>
					<Tips tip={tip} values={values} setTip={setTip} />
					<Bill
						getter={person}
						setter={setPerson}
						label="person"
						name="Number of People"
					/>
				</div>
				<div className="calculator__result">
					<div className="result__container">
						<div className="tip-container">
							<div className="tip-label">
								Tip Amount
								<p>/ person</p>
							</div>
							<div className="tip-amount">${tipAmountPerPerson.toFixed(2)}</div>
						</div>
						<div className="total-container">
							<div className="total-label">
								Total
								<p>/ person</p>
							</div>
							<div className="total-amount">
								${totalAmountPerPerson.toFixed(2)}
							</div>
						</div>
					</div>

					{(tip === "" && bill === "") || (bill === 0 && person === 0) ? (
						<div className="btn">
							<button disabled onClick={resetValues} className="reset">
								reset
							</button>
						</div>
					) : (
						<div className="btn">
							<button onClick={resetValues} className="reset">
								reset
							</button>
						</div>
					)}
				</div>
			</main>
		</div>
	);
};

export default Calculator;
