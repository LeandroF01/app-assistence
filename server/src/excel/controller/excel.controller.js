const XLSX = require("xlsx");

const workbook = XLSX.readFile(__dirname + "/utils/assistanceObra.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet);

const peopleWorkbook = XLSX.readFile(__dirname + "/utils/people.xlsx");
const peopleWorksheet = peopleWorkbook.Sheets[peopleWorkbook.SheetNames[0]];
const peopleData = XLSX.utils.sheet_to_json(peopleWorksheet);

//ASSISTENCE

const getExcel = async () => {
	return data;
};

const postExcel = async (date) => {
	console.log(date);
	XLSX.utils.sheet_add_json(worksheet, [date], {
		header: ["A", "B", "C", "D", "E"],
		skipHeader: true,
		origin: -1,
	});

	await XLSX.writeFile(workbook, __dirname + "/utils/assistanceObra.xlsx");
};

//PEOPLE

const getExcelPeople = async () => {
	return peopleData;
};

const postExcelPeople = async (date) => {
	console.log(date);
	XLSX.utils.sheet_add_json(peopleWorksheet, [date], {
		header: ["A"],
		skipHeader: true,
		origin: -1,
	});

	await XLSX.writeFile(workbook, __dirname + "/utils/people.xlsx");
};

module.exports = { getExcel, getExcelPeople, postExcel, postExcelPeople };
