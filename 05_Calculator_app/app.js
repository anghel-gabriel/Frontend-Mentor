'use strict';

/* ------------------- DOM WORK ------------------- */

// every operation will be like: total [operator] rightNumber
let total = '0';
// the number after the operator
let rightNumber;
// variable which will hold a string value (the operator symbol)
let operator;
// selecting all the number buttons from 0-9
const numberButtons = document.querySelectorAll('.number-btn');
// selecting all the operator buttons, "+", "-", "*", "/"
const operatorButtons = document.querySelectorAll('.operator-btn');
// selecting the other buttons
const dotBtn = document.querySelector('.dot-btn');
const equalBtn = document.querySelector('.equal-btn');
const resetBtn = document.querySelector('.reset-btn');
const deleteBtn = document.querySelector('.btn-delete');
// upper display
const upperDisplayBox = document.querySelector('.previous-number');
// the operator sign shown in the upper display
const operatorBox = document.querySelector('.operator');
// main display (the display showing inserted number)
const mainDisplayBox = document.querySelector('.main-display');
// theme toggle button
const themeToggleBtn = document.querySelector('#switch-btn');

/* ------------------- EVENT HANDLERS and FUNCTIONS ------------------- */
function updateOperator(box) {
	if (box.textContent.length > 0) {
		operator = box.textContent;
	}
	operatorBox.textContent = operator;
}
function emptyContent(box) {
	box.textContent = '';
}
function operatorSwitchFunc() {
	switch (operator) {
		case '+':
			total += rightNumber;
			break;
		case '*':
			total *= rightNumber;
			break;
		case '/':
			total /= rightNumber;
			break;
		case '-':
			total -= rightNumber;
			break;
		default:
			break;
	}
}
function deleteBtnHandler() {
	if (mainDisplayBox.textContent.length > 0 && upperDisplayBox.textContent.length > 0) {
		emptyContent(mainDisplayBox);
	} else {
		mainDisplayBox.textContent = 0;
	}
}

/* ------------------- EVENT LISTENERS ------------------- */
// dot button event
dotBtn.addEventListener('click', () => {
	if (mainDisplayBox.textContent !== '' && !mainDisplayBox.textContent.includes('.')) {
		// i want to allow my calculator to add the dot just if the string is not empty (so i won't have ".3")
		mainDisplayBox.textContent += '.';
	}
});

// number buttons event
numberButtons.forEach((numberBtn) =>
	numberBtn.addEventListener('click', () => {
		//i don't want to concatenate when the first digit is "0" without a dot after, so the display couldn't show "03245", it will display "3245" or "0.3245", depending; else (when the first digit is "0" and has no dot after, i will replace 0 with empty string so i concatenate)
		if (mainDisplayBox.textContent === '0') {
			emptyContent(mainDisplayBox);
		}
		mainDisplayBox.textContent += numberBtn.textContent.toString();
	})
);

/* operator buttons event */
operatorButtons.forEach((operatorBtn) =>
	operatorBtn.addEventListener('click', () => {
		/* case1: when upper display and main display have values  */
		if (upperDisplayBox.textContent.length > 0 && mainDisplayBox.textContent.length > 0) {
			total = parseFloat(upperDisplayBox.textContent);
			rightNumber = parseFloat(mainDisplayBox.textContent);
			operatorSwitchFunc();
			upperDisplayBox.textContent = total;
			emptyContent(mainDisplayBox);
			updateOperator(operatorBtn);
			/* case2: when we just change the operator */
		} else if (upperDisplayBox.textContent.length > 0 && mainDisplayBox.textContent.length < 1) {
			updateOperator(operatorBtn);
		} else {
			upperDisplayBox.textContent = parseFloat(mainDisplayBox.textContent);
			emptyContent(mainDisplayBox);
			updateOperator(operatorBtn);
		}
	})
);

// equal button event
equalBtn.addEventListener('click', () => {
	if (upperDisplayBox.textContent.length < 1 || (upperDisplayBox.textContent.length > 0 && mainDisplayBox.textContent.length < 1)) {
		alert('You should insert two numbers.');
	} else {
		// i take the value of upper number and assign it to total
		total = parseFloat(upperDisplayBox.textContent);
		// the shown value (of the 2nd number) will be assigned to rightNumber
		rightNumber = parseFloat(mainDisplayBox.textContent);
		// operator switch loop
		updateOperator(operatorBox);
		operatorSwitchFunc();
		mainDisplayBox.textContent = total;
		emptyContent(upperDisplayBox);
		emptyContent(operatorBox);
	}
});

// delete button event
deleteBtn.addEventListener('click', deleteBtnHandler);

// reset button event
resetBtn.addEventListener('click', () => {
	total = '';
	rightNumber = '';
	operator = '';
	deleteBtnHandler();
	emptyContent(upperDisplayBox);
	emptyContent(operatorBox);
	mainDisplayBox.textContent = '0';
});

/* ------------------- THEME TOGGLE ------------------- */
// setting the default
document.documentElement.setAttribute('data-theme', 'numberOne');
// toggle button handler
themeToggleBtn.addEventListener('click', (e) => {
	console.log(themeToggleBtn.classList);
	switch (themeToggleBtn.classList[0]) {
		case 'switcher-left':
			themeToggleBtn.classList.remove('switcher-left');
			themeToggleBtn.classList.toggle('switcher-middle');
			document.documentElement.setAttribute('data-theme', 'numberTwo');
			break;
		case 'switcher-middle':
			themeToggleBtn.classList.remove('switcher-middle');
			themeToggleBtn.classList.toggle('switcher-right');
			document.documentElement.setAttribute('data-theme', 'numberThree');
			break;
		case 'switcher-right':
			themeToggleBtn.classList.remove('switcher-right');
			themeToggleBtn.classList.toggle('switcher-left');
			document.documentElement.setAttribute('data-theme', 'numberOne');
			break;
		default:
			break;
	}
});
