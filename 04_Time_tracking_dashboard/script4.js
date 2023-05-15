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

/* Buttons (list-items) */
const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");
const periodBtns = [dailyBtn, weeklyBtn, monthlyBtn];

/* Changing Areas */
const currentAreas = document.querySelectorAll(".current");
const previousAreas = document.querySelectorAll(".previous");
const periodAreas = document.querySelectorAll(".period");

/* DOM - data */
function changeData(x, y) {
	for (i = 0; i < currentAreas.length; i++) {
		currentAreas[i].textContent = dataObject[i].timeframes[y].current;
		previousAreas[i].textContent = dataObject[i].timeframes[y].previous;
	}
	for (let j = 0; j < periodAreas.length; j++) {
		periodAreas[j].textContent = x;
	}
	for (let k = 0; k < periodBtns.length; k++) {
		periodBtns[k].classList.remove("active");
	}
	event.target.classList.toggle("active");
}

/* Buttons triggering functions */
dailyBtn.addEventListener("click", () => {
	changeData("day", "daily");
});

weeklyBtn.addEventListener("click", () => {
	changeData("week", "weekly");
});

monthlyBtn.addEventListener("click", () => {
	changeData("month", "monthly");
});
