const freelancesData = require('../models/freelances')

function getFreelance(id) {
	return freelancesData.find((freelancer => freelancer.id === id))
}

module.exports = getFreelance
