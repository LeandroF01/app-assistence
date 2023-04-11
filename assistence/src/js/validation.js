export const validateErrors = (error, input) => {
	const fromControl = document.querySelector(`.form__input-${input}`);

	const validation = document.querySelector(`.validation-${input}`);
	const form = document.querySelector(".form");

	if (error !== "") {
		fromControl.classList.add("is-invalid");
		validation.classList.add("invalid-feedback");
		validation.textContent = `Invalid ${error}`;
	} else {
		fromControl.classList.remove("is-invalid");
		validation.classList.remove("invalid-feedback");
		fromControl.classList.add("is-valid");
		validation.textContent = `Looks good!`;
	}
	form.addEventListener("reset", function () {
		fromControl.classList.remove("is-valid");
		validation.textContent = "";
	});
};

export const hayErrores = () => {
	const errores = document.querySelectorAll(".invalid-feedback");
	return errores.length > 0;
};

export const validateErrorsFilter = (error, input) => {
	const filterControl = document.querySelector(`.filter__input-${input}`);

	const validation = document.querySelector(`.validation-${input}`);
	const filter = document.querySelector(".filter");

	if (error !== "") {
		filterControl.classList.add("is-invalid");
		validation.classList.add("invalid-feedback");
		validation.textContent = `Invalid ${error}`;
	} else {
		filterControl.classList.remove("is-invalid");
		validation.classList.remove("invalid-feedback");
		filterControl.classList.add("is-valid");
		validation.textContent = `Looks good!`;
	}
	filter.addEventListener("reset", function () {
		filterControl.classList.remove("is-valid");
		validation.textContent = "";
	});
};
