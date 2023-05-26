'use strict';

/* Number buttons */
const button0 = document.querySelector('.btn-0');
const button1 = document.querySelector('.btn-1');
const button2 = document.querySelector('.btn-2');
const button3 = document.querySelector('.btn-3');
const button4 = document.querySelector('.btn-4');
const button5 = document.querySelector('.btn-5');
const button6 = document.querySelector('.btn-6');
const button7 = document.querySelector('.btn-7');
const button8 = document.querySelector('.btn-8');
const button9 = document.querySelector('.btn-9');

const numberButtons = document.querySelectorAll('.btn');

/* The other buttons */
const buttonDot = document.querySelector('.btn-dot');
const buttonAdd = document.querySelector('.btn-add');
const buttonSubtract = document.querySelector('.btn-subtract');
const buttonMultiply = document.querySelector('.btn-multiply');
const buttonDivide = document.querySelector('.btn-divide');
const buttonEqual = document.querySelector('.btn-equal');
const buttonReset = document.querySelector('.btn-reset');
const buttonDelete = document.querySelector('.btn-delete');

/* Screen */
const screenDisplay = document.querySelector('.screen');

/* Number 0 */
button0.addEventListener('click', numberPress0);
function numberPress0() {
	screenDisplay.innerHTML += 0;
}

/* Number 1 */
button1.addEventListener('click', numberPress1);
function numberPress1() {
	screenDisplay.innerHTML += 1;
}

/* Number 2 */
button2.addEventListener('click', numberPress2);
function numberPress2() {
	screenDisplay.innerHTML += 2;
}

/* Number 3 */
button3.addEventListener('click', numberPress3);
function numberPress3() {
	screenDisplay.innerHTML += 3;
}

/* Number 4 */
button4.addEventListener('click', numberPress4);
function numberPress4() {
	screenDisplay.innerHTML += 4;
}

/* Number 5 */
button5.addEventListener('click', numberPress5);
function numberPress5() {
	screenDisplay.innerHTML += 5;
}

/* Number 6 */
button6.addEventListener('click', numberPress6);
function numberPress6() {
	screenDisplay.innerHTML += 6;
}

/* Number 7 */
button7.addEventListener('click', numberPress7);
function numberPress7() {
	screenDisplay.innerHTML += 7;
}

/* Number 8 */
button8.addEventListener('click', numberPress8);
function numberPress8() {
	screenDisplay.innerHTML += 8;
}

/* Number 9 */
button9.addEventListener('click', numberPress9);
function numberPress9() {
	screenDisplay.innerHTML += 9;
}

/* Number 9 */
buttonDot.addEventListener('click', dotPress);
function dotPress() {
	screenDisplay.innerHTML += '.';
}

/* Button Reset */
buttonReset.addEventListener('click', resetPress);
function resetPress() {
	screenDisplay.innerHTML = '';
}

export * from 'buttons.js';
