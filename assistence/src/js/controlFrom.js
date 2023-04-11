import { timeJobs } from "./time.js";
import { validateErrors, totalErrors } from "./validation.js";

const form = document.querySelector(".form");
const inputText = document.querySelector(".form__input-name");
const inputDate = document.querySelector(".form__input-date");
const inputNumber1 = document.querySelector(".form__input-entry");
const inputNumber2 = document.querySelector(".form__input-output");

const inputVacation = document.querySelector(".form__input-vacation");
const inputSick = document.querySelector(".form__input-sick");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	//Values inputsS
	const date = inputDate.value;
	const name = inputText.value;
	const entry = inputNumber1.value;
	const output = inputNumber2.value;
	const total = entry && output ? timeJobs(entry, output) : "0";

	const vacation = inputVacation.checked ? "Vacaciones" : "";
	const sick = inputSick.checked ? "P/M" : "";

	//Validations
	if (date === "") {
		validateErrors("date", "date");
	} else {
		validateErrors("", "date");
	}

	if (name === "") {
		validateErrors("name", "name");
	} else {
		validateErrors("", "name");
	}

	// Validations hours with vacation and sick
	let value1;
	let value2;

	if ((entry === "" && output === "" && vacation !== "") || sick !== "") {
		value1 = vacation || sick;
		value2 = vacation || sick;
	} else {
		if (entry === "") {
			validateErrors("entry", "entry");
		} else {
			validateErrors("", "entry");
		}

		if (output === "") {
			validateErrors("output", "output");
		} else {
			validateErrors("", "output");
		}
		value1 = entry;
		value2 = output;
	}

	if (!totalErrors()) {
		const newData = {
			A: date,
			B: name,
			C: value1,
			D: value2,
			E: total,
		};

		//Post to excel

		const URL = "http://localhost:3000/api/v1/excel";

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newData),
		};

		fetch(URL, options);
		form.reset();
	}
});
