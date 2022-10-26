const getJSON = (path, callback) => {
	return callback(fetch(path).then((r) => r.json()));
};

getJSON("../data.json", (response) => {
	fillData(response);
});

const fillData = (data) => {
	data.forEach((res) => {
		const expense_chart = document.querySelector(`.expense__${res.day}-chart`);

		if (!expense_chart) return;

		if (res.day === "wed")
			expense_chart.style.backgroundColor = "hsl(186, 34%, 60%)";

		// console.log(res.amount);
		expense_chart.style.height = res.amount * 3.2 + "px";

		const expense_day = document.querySelector(`.expense__${res.day}-day`);

		if (!expense_day) return;

		expense_day.innerHTML = res.day;

		const amount = document.querySelector(".expense__amount-" + res.day);

		// console.log(expense_chart);
		expense_chart.addEventListener("mouseover", () => {
			amount.style.visibility = "visible";
			amount.innerHTML = "$" + res.amount;
			expense_chart.style.opacity = "0.8";
		});

		expense_chart.addEventListener("mouseout", () => {
			amount.style.visibility = "hidden";
			expense_chart.style.opacity = 1;
		});
	});
};
