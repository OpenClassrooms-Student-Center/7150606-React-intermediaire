const jobAnswersData = {
	seo: ['a2'],
	frontend: ['a4'], 
	design: ['a3'],
	backend: ['a1','a4','a5'],
	mobile: ['a6']
}

const jobsDefinitionData = {
	seo: `Le SEO est en charge du référencement web d'une page`,
	frontend: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
	design: `La personne en charge du design va devoir préparer les maquettes du site`,
	backend: `Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur`,
	mobile: `Les développeurs mobile conçoivent des applications mobiles en natif (et non simplement en JavaScript)`
}

module.exports = { jobAnswersData, jobsDefinitionData }