/* @TODO:  delete button, upper display content, separate 3 digits by commas*/

'use strict';

let TOTAL = '0'; // every operation will be like TOTAL [OPERATOR] RIGHT_NUMBER
let RIGHT_NUMBER; // the number after the operator
let OPERATOR; //variable which will hold a string value

const numberButtons = document.querySelectorAll('.number-btn'); //selecting all the number buttons from 0-9
const operatorButtons = document.querySelectorAll('.operator-btn'); //selecting all the operator buttons, "+", "-", "*", "/"
const dotBtn = document.querySelector('.dot-btn'); //selecting the dot button
const equalBtn = document.querySelector('.equal-btn');
const resetBtn = document.querySelector('.reset-btn');
const upperDisplayBox = document.querySelector('.previous-number'); // upper display
const operatorBox = document.querySelector('.operator'); // the operator sign shown in the upper display
const mainDisplay = document.querySelector('.main-display'); //main display selector
const themeSwitchBtn = document.querySelector('#switch-btn');
mainDisplay.textContent = '0'; //getting sure that shown text is a string

/* ------------------- DISPLAY UPDATE FUNCTIONS ------------------- */

/* Reset button and function*/
resetBtn.addEventListener('click', () => {
	TOTAL = '';
	RIGHT_NUMBER = '';
	OPERATOR = '';
	mainDisplay.textContent = '0';
	upperDisplayBox.textContent = '';
});

/* ------------------- BUTTON EVENTS ------------------- */

/* Number buttons updating display */
for (let i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener('click', () => {
		if (mainDisplay.textContent !== '0') {
			//i don't want to concatenate when the first digit is "0" without a dot after
			mainDisplay.textContent += numberButtons[i].textContent.toString();
		} else {
			mainDisplay.textContent = ''; /* else (when the first digit is "0" and has no dot after, i will replace 0 with empty string so i concatenate) */
			mainDisplay.textContent += numberButtons[i].textContent.toString();
		}
	});
}

/* Dot button */
dotBtn.addEventListener('click', () => {
	if (mainDisplay.textContent !== '' && !mainDisplay.textContent.includes('.')) {
		// i want to allow my calculator to add the dot just if the string is not empty (so i won't have ".3") and the text shown does not include a dot
		mainDisplay.textContent += '.';
	}
});

/* Operator buttons pressing*/
for (let i = 0; i < operatorButtons.length; i++) {
	operatorButtons[i].addEventListener('click', () => {
		/* CASE 1: when upper display and main display have values  */
		if (upperDisplayBox.textContent.length > 0 && mainDisplay.textContent.length > 0) {
			TOTAL = parseFloat(upperDisplayBox.textContent);
			RIGHT_NUMBER = parseFloat(mainDisplay.textContent);
			switch (OPERATOR) {
				case '+':
					TOTAL += RIGHT_NUMBER;
					break;
				case '*':
					TOTAL *= RIGHT_NUMBER;
					break;
				case '/':
					TOTAL /= RIGHT_NUMBER;
					break;
				case '-':
					TOTAL -= RIGHT_NUMBER;
					break;
				default:
					alert('There is an error!');
			}
			OPERATOR = operatorButtons[i].textContent;
			operatorBox.textContent = OPERATOR;
			upperDisplayBox.textContent = TOTAL;
			mainDisplay.textContent = '';
			/* CASE 2: when we just change the operator */
		} else if (upperDisplayBox.textContent.length > 0 && mainDisplay.textContent.length < 1) {
			OPERATOR = operatorButtons[i].textContent;
			operatorBox.textContent = OPERATOR;
		} else {
			upperDisplayBox.textContent = parseFloat(mainDisplay.textContent);
			mainDisplay.textContent = '';
			OPERATOR = operatorButtons[i].textContent;
			operatorBox.textContent = OPERATOR;
		}
	});
}

/* Equal button  */
equalBtn.addEventListener('click', () => {
	TOTAL = parseFloat(upperDisplayBox.textContent); //i take tha value of upper number and assign it to TOTAL
	RIGHT_NUMBER = parseFloat(mainDisplay.textContent); // the shown value (of the 2nd number) will be assigned to RIGHT_NUMBER
	OPERATOR = operatorBox.textContent;
	switch (OPERATOR) {
		case '+':
			TOTAL += RIGHT_NUMBER;
			break;
		case '*':
			TOTAL *= RIGHT_NUMBER;
			break;
		case '/':
			TOTAL /= RIGHT_NUMBER;
			break;
		case '-':
			TOTAL -= RIGHT_NUMBER;
			break;
		default:
			alert('There is an error!');
	}
	mainDisplay.textContent = TOTAL;
});

/* ------------------- THEME SWITCHER ------------------- */
/* Setting the default */
document.documentElement.setAttribute('data-theme', 'numberOne');
/* Theme switcher */
themeSwitchBtn.addEventListener('click', (e) => {
	console.log(themeSwitchBtn.classList);
	switch (themeSwitchBtn.classList[0]) {
		case 'switcher-left':
			themeSwitchBtn.classList.remove('switcher-left');
			console.log(themeSwitchBtn.classList);
			themeSwitchBtn.classList.toggle('switcher-middle');
			document.documentElement.setAttribute('data-theme', 'numberTwo');
			break;
		case 'switcher-middle':
			themeSwitchBtn.classList.remove('switcher-middle');
			console.log(themeSwitchBtn.classList);
			themeSwitchBtn.classList.toggle('switcher-right');
			document.documentElement.setAttribute('data-theme', 'numberThree');
			break;
		case 'switcher-right':
			themeSwitchBtn.classList.remove('switcher-right');
			console.log(themeSwitchBtn.classList);
			themeSwitchBtn.classList.toggle('switcher-left');
			document.documentElement.setAttribute('data-theme', 'numberOne');
			break;

		default:
			alert('There is an error switching the theme');
	}
});
