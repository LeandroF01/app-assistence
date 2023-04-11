const excelControllers = require("../controller/excel.controller");

//ASSISTENCE

const getExcel = (req, res) => {
	excelControllers
		.getExcel()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({ message: err.message });
		});
};

const postExcel = (req, res) => {
	const { A, B, C, D, E } = req.body;

	if (A && B && C && D && E) {
		excelControllers
			.postExcel({ A, B, C, D, E })
			.then((data) => {
				res.status(201).json(data);
			})
			.catch((err) => {
				res.status(400).json({ message: err.message });
			});
	} else {
		res.status(400).json({
			message: "Missing Data",
			fields: {
				A: "string",
				B: "string",
				C: "number",
				D: "number",
				E: "number",
			},
		});
	}
};

//PEOPLE

const getExcelPeople = (req, res) => {
	excelControllers
		.getExcelPeople()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({ message: err.message });
		});
};

const postExcelPeople = (req, res) => {
	const { A, B, C, D, E } = req.body;

	if (A && B && C && D && E) {
		excelControllers
			.postExcelPeople({ A })
			.then((data) => {
				res.status(201).json(data);
			})
			.catch((err) => {
				res.status(400).json({ message: err.message });
			});
	} else {
		res.status(400).json({
			message: "Missing Data",
			fields: {
				A: "string",
			},
		});
	}
};

module.exports = { getExcel, postExcel, getExcelPeople, postExcelPeople };
