const { db } = require('../util/admin');

exports.postCities = (request, response) => {

	var batch = db.batch();

	const array = [
		{
			city: 'Mumbai',
			countryid : 2
		},
		{
			city: 'Visakhapatnam',
			countryid : 3
		},
		{
			city: 'Coimbatore',
			countryid : 4
		}

	]

	array.forEach((doc) => {
		batch.set(db.collection('IMCities').doc(), doc);
	});

	batch.commit().then(function () {
		return response.json({ "status": "Sucess" });
	});

	// const newCitiesItem = {
	// 	city: request.body.city,
	// 	countryid: request.body.countryid
	// }

	// db
	// 	.collection('IMCities')
	// 	.add(newCitiesItem)
	// 	.then((doc) => {
	// 		const responsecitiesItem = newCitiesItem;
	// 		responsecitiesItem.id = doc.id;
	// 		return response.json(responsecitiesItem);
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 		response.status(500).json({ error: 'Something went wrong' });
	// 	});
};

exports.getcitiesbycountryid = (request, response) => {
	db
		.collection('IMCities')
		.where('countryid', '==', request.body.countryid)
		.get()
		.then((data) => {
			let cities = [];
			data.forEach((doc) => {
				cities.push({
					citydocid: doc.id,
					city: doc.data().city,
					countryid: doc.data().countryid
				});
			});
			return response.json(cities);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};