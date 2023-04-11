const router = require("express").Router();

const excelServices = require("../services/excel.services");

router.route("/").get(excelServices.getExcel).post(excelServices.postExcel);

router
	.route("/people")
	.get(excelServices.getExcelPeople)
	.post(excelServices.postExcelPeople);

module.exports = router;
