const { db } = require('../index');

exports.getallgender = (request, response) => {
	db
        .collection('IMGender')
        .orderBy('Id', 'asc')
		.get()
		.then((data) => {
			let genders = [];
			data.forEach((doc) => {
				genders.push({
					genderdocid: doc.id,
					genderId:doc.data().Id,
					genderName: doc.data().Name
				});
			});
			return response.json(genders);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};