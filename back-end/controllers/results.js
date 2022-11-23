const { jobAnswersData, jobsDefinitionData } = require('../models/results')

function getResults(a1, a2, a3, a4, a5, a6) {

	const answers = { a1, a2, a3, a4, a5, a6 }
	const answerNumbers = Object.keys(answers)

	const jobsList = Object.keys(jobAnswersData)
	
	const requiredJobsList =  answerNumbers.reduce((prevJobs, answerNumber) => {
		if (!answers[answerNumber] || answers[answerNumber] === 'false') {
			return prevJobs
		}

		const jobs = jobsList.reduce((prevJobAnswers, jobTitle) => {
			if (jobAnswersData[jobTitle].includes(answerNumber)) {
				return [...prevJobAnswers, jobTitle]
			}
			return prevJobAnswers
		}, [] )

		return [...prevJobs, ...jobs]
	}, [] )

	const uniqueJobs = [...new Set(requiredJobsList)];
	return uniqueJobs.map(job => ({
		title: job,
		description: jobsDefinitionData[job]
	}))
}

module.exports = getResults
