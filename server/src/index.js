const express = require("express");
const app = express();
const excelRouter = require("./excel/router/excel.router");

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({
		message: "OK!",
		users: "localhost:3000/api/v1/",
	});
});

app.use("/api/v1/excel", excelRouter);

app.listen(3000, () => {
	console.log("Servidor iniciado en el puerto 3000");
});
