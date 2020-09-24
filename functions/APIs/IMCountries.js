const admin = require('firebase-admin');

exports.postCountries = (request, response) => {

	const newCountryItem = {
		countryid: request.body.countryid,
		name: request.body.name
	}
	
	admin.firestore()
		.collection('IMCountries')
		.add(newCountryItem)
		.then((doc) => {
			const responsecountryItem = newCountryItem;
			responsecountryItem.id = doc.id;
			return response.json(responsecountryItem);
		})
		.catch((error) => {
			console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};

exports.getallcountries = (request, response) => {
	admin.firestore()
		.collection('IMCountries')
		.get()
		.then((data) => {
			let countrys = [];
			data.forEach((doc) => {
				countrys.push({
					countrydocid: doc.id,
					countryid: doc.data().countryid,
					name: doc.data().name
				});
			});
			return response.json(countrys);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};