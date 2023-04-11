import { timeJobs } from "./time.js";
import { validateErrors, hayErrores } from "./validation.js";

const form = document.querySelector(".form");
const inputText = document.querySelector(".form__input-name");
const inputDate = document.querySelector(".form__input-date");
const inputNumber1 = document.querySelector(".form__input-entry");
const inputNumber2 = document.querySelector(".form__input-output");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const date = inputDate.value;
	const name = inputText.value;
	const entry = inputNumber1.value;
	const output = inputNumber2.value;
	const total = timeJobs(entry, output);

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

	if (!hayErrores()) {
		const newData = {
			A: date,
			B: name,
			C: entry,
			D: output,
			E: total,
		};

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
