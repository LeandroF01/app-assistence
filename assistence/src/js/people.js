const datalist = document.querySelector("#opciones-people");

const URL = "http://localhost:3000/api/v1/excel/people";

fetch(URL)
	.then((response) => response.json())
	.then((data) => {
		const people = data.map(({ NOMBRES }) => {
			const newElement = document.createElement("option");
			newElement.value = NOMBRES;

			datalist.appendChild(newElement);
		});
		return people;
	});
