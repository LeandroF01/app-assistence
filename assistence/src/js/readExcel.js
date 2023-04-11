const URL = "http://localhost:3000/api/v1/excel";

const tbody = document.querySelector(".tbody");
const headerTr = document.createElement("tr");

fetch(URL)
	.then((res) => res.json())
	.then((data) => {
		const info = data.map(({ Fecha, Nombre, Entrada, Salida, Total }) => {
			const row = document.createElement("tr");

			const date = document.createElement("td");
			date.textContent = Fecha;

			const name = document.createElement("td");
			name.textContent = Nombre;

			const entry = document.createElement("td");
			entry.textContent = Entrada;

			const output = document.createElement("td");
			output.textContent = Salida;

			const total = document.createElement("td");
			total.textContent = Total;

			row.appendChild(date);
			row.appendChild(name);
			row.appendChild(entry);
			row.appendChild(output);
			row.appendChild(total);

			tbody.appendChild(row);
		});

		return info;
	});
