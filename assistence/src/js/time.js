const timeToSeg = (hours) => {
	const [hour, minutes] = hours.split(":").map(Number);
	const value = hour * 3600 + minutes * 60;

	return value;
};

const timetoHour = (hours) => {
	const horasTrabajadas = Math.floor(hours);
	const minutosTrabajados = Math.floor((hours - horasTrabajadas) * 60);

	return `${horasTrabajadas.toString().padStart(2, "0")}:${minutosTrabajados
		.toString()
		.padStart(2, "0")}`;
};

export const timeJobs = (entry, output) => {
	const timeEntry = timeToSeg(entry);
	const timeOutput = timeToSeg(output);
	const hoursJobs = (timeOutput - timeEntry - 3600) / 3600;
	console.log("time");
	return timetoHour(hoursJobs);
};
