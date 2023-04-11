import { utils, writeFile } from "../../node_modules/xlsx/xlsx.mjs";
import { hayErrores, validateErrorsFilter } from "./validation.js";

const URL = "http://localhost:3000/api/v1/excel";

// Crear un objeto de libro de trabajo
const workbook = utils.book_new();

// Crear una hoja de trabajo en blanco
const worksheet = utils.json_to_sheet([]);

const filter = document.querySelector(".filter");
const filterName = document.querySelector(".filter__input-name");
const flterStart = document.querySelector(".filter__input-start");
const filterEnd = document.querySelector(".filter__input-end");

filter.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = filterName.value;
	const dateStart = flterStart.value;
	const dateEnd = filterEnd.value;

	if (name === "") {
		validateErrorsFilter("name", "name");
	} else {
		validateErrorsFilter("", "name");
	}

	if (dateStart === "") {
		validateErrorsFilter("start", "start");
	} else {
		validateErrorsFilter("", "start");
	}

	if (dateEnd === "") {
		validateErrorsFilter("end", "end");
	} else {
		validateErrorsFilter("", "end");
	}

	if (!hayErrores()) {
		fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				const filter = data.filter(({ Fecha, Nombre }) => {
					if (Fecha >= dateStart && Fecha <= dateEnd && name === Nombre) {
						return Fecha;
					}
				});

				// Agregar los datos a la hoja de trabajo
				utils.sheet_add_json(worksheet, filter, { origin: "A1" });

				// Agregar la hoja de trabajo al libro de trabajo
				utils.book_append_sheet(workbook, worksheet, `${name.toString()}-xlsx`);
				// Guardar el libro de trabajo como un archivo de Excel
				writeFile(workbook, `${name.toString()}.xlsx`);
			});

		filter.reset();
	}
});
