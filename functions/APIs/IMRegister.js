const { db } = require('../util/admin');

exports.getAllImmediateJoiners = (request, response) => {
	db
		.collection('IMRegister')
		.where('username','==','deepthiklu')
		.where('password','==','vamsi')
		.get()
		.then((data) => {
			let immediatejoiners = [];
			data.forEach((doc) => {
				immediatejoiners.push({
	                immediatejoinerId: doc.id,
	                lastname: doc.data().firstname
				});
			});
			return response.json(immediatejoiners);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};