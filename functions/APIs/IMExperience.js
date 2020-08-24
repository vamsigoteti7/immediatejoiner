exports.getallexperience = (request, response) => {
	db
		.collection('IMExperience')
		.get()
		.then((data) => {
			let experience = [];
			data.forEach((doc) => {
				experience.push({
					experiencedocid: doc.id,
					experienceid: doc.data().experienceid,
					name: doc.data().name
				});
			});
			return response.json(experience);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};