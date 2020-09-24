const { db } = require('../index');

exports.postCountries = (request, response) => {

	const newCountryItem = {
		countryid: request.body.countryid,
		name: request.body.name
	}
	
	db
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
	db
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