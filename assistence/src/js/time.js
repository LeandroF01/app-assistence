const timeToSeg = (hours) => {
	const [hour, minutes] = hours.split(":").map(Number);
	const value = hour * 3600 + minutes * 60;

	return value;
};

const timetoHour = (hours) => {
	const hoursJobs = Math.floor(hours);
	const minutsJobs = Math.floor((hours - hoursJobs) * 60);

	return `${hoursJobs.toString().padStart(2, "0")}:${minutsJobs
		.toString()
		.padStart(2, "0")}`;
};

export const timeJobs = (entry, output) => {
	const timeEntry = timeToSeg(entry);
	const timeOutput = timeToSeg(output);
	const hoursJobs = (timeOutput - timeEntry - 3600) / 3600;

	return timetoHour(hoursJobs);
};
