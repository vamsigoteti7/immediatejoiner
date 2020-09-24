const admin = require('firebase-admin');

exports.getallexperience = (request, response) => {
	admin.firestore()
		.collection('IMExperience')
		.get()
		.then((data) => {
			let experience = [];
			data.forEach((doc) => {
				experience.push({
					experiencedocid: doc.id,
					name: doc.data().expname
				});
			});
			return response.json(experience);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

exports.postExperience = (request, response) => {

	const newExperienceItem = {
		expname: request.body.expname
	}
	
	admin.firestore()
		.collection('IMExperience')
		.add(newExperienceItem)
		.then((doc) => {
			const responseexperienceItem = newExperienceItem;
			responseexperienceItem.id = doc.id;
			return response.json(responseexperienceItem);
		})
		.catch((error) => {
			console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};