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

/* DOM - data */
const currentWorkTime = document.querySelector(".current-work-time");
const previousWorkTime = document.querySelector(".previous-work-time");

const currentPlayTime = document.querySelector(".current-play-time");
const previousPlayTime = document.querySelector(".previous-play-time");

const currentStudyTime = document.querySelector(".current-study-time");
const previousStudyTime = document.querySelector(".previous-study-time");

const currentExerciseTime = document.querySelector(".current-exercise-time");
const previousExerciseTime = document.querySelector(".previous-exercise-time");

const currentSocialTime = document.querySelector(".current-social-time");
const previousSocialTime = document.querySelector(".previous-social-time");

const currentSelfCareTime = document.querySelector(".current-self-care-time");
const previousSelfCareTime = document.querySelector(".previous-self-care-time");

dailyBtn.addEventListener("click", function () {
	dailyBtn.classList.add("active");
	weeklyBtn.classList.remove("active");
	monthlyBtn.classList.remove("active");
	currentWorkTime.textContent = dataObject[0].timeframes.daily.current;
	previousWorkTime.textContent = dataObject[0].timeframes.daily.previous;
	currentPlayTime.textContent = dataObject[1].timeframes.daily.current;
	previousPlayTime.textContent = dataObject[1].timeframes.daily.previous;
	currentStudyTime.textContent = dataObject[2].timeframes.daily.current;
	previousStudyTime.textContent = dataObject[2].timeframes.daily.previous;
	currentExerciseTime.textContent = dataObject[3].timeframes.daily.current;
	previousExerciseTime.textContent = dataObject[3].timeframes.daily.previous;
	currentSocialTime.textContent = dataObject[4].timeframes.daily.current;
	previousSocialTime.textContent = dataObject[4].timeframes.daily.previous;
	currentSelfCareTime.textContent = dataObject[5].timeframes.daily.current;
	previousSelfCareTime.textContent = dataObject[5].timeframes.daily.previous;
});

weeklyBtn.addEventListener("click", function () {
	dailyBtn.classList.remove("active");
	weeklyBtn.classList.add("active");
	monthlyBtn.classList.remove("active");
	currentWorkTime.textContent = dataObject[0].timeframes.weekly.current;
	previousWorkTime.textContent = dataObject[0].timeframes.weekly.previous;
	currentPlayTime.textContent = dataObject[1].timeframes.weekly.current;
	previousPlayTime.textContent = dataObject[1].timeframes.weekly.previous;
	currentStudyTime.textContent = dataObject[2].timeframes.weekly.current;
	previousStudyTime.textContent = dataObject[2].timeframes.weekly.previous;
	currentExerciseTime.textContent = dataObject[3].timeframes.weekly.current;
	previousExerciseTime.textContent = dataObject[3].timeframes.weekly.previous;
	currentSocialTime.textContent = dataObject[4].timeframes.weekly.current;
	previousSocialTime.textContent = dataObject[4].timeframes.weekly.previous;
	currentSelfCareTime.textContent = dataObject[5].timeframes.weekly.current;
	previousSelfCareTime.textContent = dataObject[5].timeframes.weekly.previous;
});

monthlyBtn.addEventListener("click", function () {
	dailyBtn.classList.remove("active");
	weeklyBtn.classList.remove("active");
	monthlyBtn.classList.add("active");
	currentWorkTime.textContent = dataObject[0].timeframes.monthly.current;
	previousWorkTime.textContent = dataObject[0].timeframes.monthly.previous;
	currentPlayTime.textContent = dataObject[1].timeframes.monthly.current;
	previousPlayTime.textContent = dataObject[1].timeframes.monthly.previous;
	currentStudyTime.textContent = dataObject[2].timeframes.monthly.current;
	previousStudyTime.textContent = dataObject[2].timeframes.monthly.previous;
	currentExerciseTime.textContent = dataObject[3].timeframes.monthly.current;
	previousExerciseTime.textContent = dataObject[3].timeframes.monthly.previous;
	currentSocialTime.textContent = dataObject[4].timeframes.monthly.current;
	previousSocialTime.textContent = dataObject[4].timeframes.monthly.previous;
	currentSelfCareTime.textContent = dataObject[5].timeframes.monthly.current;
	previousSelfCareTime.textContent = dataObject[5].timeframes.monthly.previous;
});
