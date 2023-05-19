/* JSON file "import" */
const dataObject = [
	{
		title: "Work",
		timeframes: {
			daily: {
				current: 5,
				previous: 7,
			},
			weekly: {
				current: 32,
				previous: 36,
			},
			monthly: {
				current: 103,
				previous: 128,
			},
		},
	},
	{
		title: "Play",
		timeframes: {
			daily: {
				current: 1,
				previous: 2,
			},
			weekly: {
				current: 10,
				previous: 8,
			},
			monthly: {
				current: 23,
				previous: 29,
			},
		},
	},
	{
		title: "Study",
		timeframes: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 7,
			},
			monthly: {
				current: 13,
				previous: 19,
			},
		},
	},
	{
		title: "Exercise",
		timeframes: {
			daily: {
				current: 1,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 5,
			},
			monthly: {
				current: 11,
				previous: 18,
			},
		},
	},
	{
		title: "Social",
		timeframes: {
			daily: {
				current: 1,
				previous: 3,
			},
			weekly: {
				current: 5,
				previous: 10,
			},
			monthly: {
				current: 21,
				previous: 23,
			},
		},
	},
	{
		title: "Self Care",
		timeframes: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 2,
				previous: 2,
			},
			monthly: {
				current: 7,
				previous: 11,
			},
		},
	},
];

/* Buttons for changing the data (list-items) */
const periodBtns = document.querySelectorAll("li");

/* Changing Areas */
const currentAreas = document.querySelectorAll(".current");
const previousAreas = document.querySelectorAll(".previous");
const periodAreas = document.querySelectorAll(".period");

/* Buttons triggering functions */
for (const periodBtn of periodBtns) {
	let period, interval;
	periodButtonType = periodBtn.getAttribute("data-button-type");
	switch (periodButtonType) {
		case "daily":
			period = "day";
			interval = "daily";
			break;
		case "weekly":
			period = "week";
			interval = "weekly";
			break;
		case "monthly":
			period = "month";
			interval = "monthly";
			break;
	}
	periodBtn.addEventListener("click", (e) => {
		for (let i = 0; i < currentAreas.length; i++) {
			currentAreas[i].textContent = dataObject[i].timeframes[interval].current;
			previousAreas[i].textContent = dataObject[i].timeframes[interval].previous;
		}
		for (let j = 0; j < periodAreas.length; j++) {
			periodAreas[j].textContent = period;
		}
		for (let k = 0; k < periodBtns.length; k++) {
			periodBtns[k].classList.remove("active");
		}
		e.target.classList.toggle("active");
	});
}
