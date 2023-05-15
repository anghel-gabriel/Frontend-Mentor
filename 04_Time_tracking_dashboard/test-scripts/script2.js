/* JSON file import */
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

/* Selecting buttons */
const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");
const periodBtns = [dailyBtn, weeklyBtn, monthlyBtn];

/* Selecting data areas (spans) */
const dataAreas = document.querySelectorAll(".data");
const periodAreas = document.getElementsByClassName("period");
console.log(dataAreas.length);

/* The function */
function changeData(x, y) {
	for (let i = 0; i < dataAreas.length; i++) {
		if (i % 2 === 0) {
			dataAreas[i].textContent = dataObject[i / 2].timeframes[y].current;
			console.log([i]);
		} else {
			dataAreas[i].textContent = dataObject[(i - 1) / 2].timeframes[y].previous;
		}
	}
	for (let i = 0; i < periodAreas.length; i++) {
		periodAreas[i].textContent = x;
	}
	for (let i = 0; i < periodBtns.length; i++) {
		periodBtns[i].classList.remove("active");
	}
}

/* Buttons triggering functions */
dailyBtn.addEventListener("click", changeData("day", "daily"));
weeklyBtn.addEventListener("click", changeData("week", "weekly"));
monthlyBtn.addEventListener("click", changeData("month", "monthly"));
