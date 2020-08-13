const { db } = require('../util/admin');

exports.getAllIMUserdetails = (request, response) => {
	db
		.collection('IMuserdetails')
		.get()
		.then((data) => {
			let ud = [];
			data.forEach((doc) => {
				ud.push({
					userdetailId: doc.id,
					username: doc.data().username,
					phonenumber: doc.data().phonenumber,
					location: doc.data().location,
					percentage: doc.data().percentage,
					totalexperience: doc.data().totalexperience,
					highestqualification: doc.data().highestqualification,
					email: doc.data().email,
					jobtitle: doc.data().jobtitle,
					resume: doc.data().resume,
					currentctc: doc.data().currentctc,
					dateofbirth: doc.data().dateofbirth
				});
			});
			return response.json(ud);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};
exports.postuserdetails = (request, response) => {

	const newuserdetailsItem = {
		username: request.body.username,
		phonenumber: request.body.phonenumber,
		location: request.body.location,
		percentage: request.body.percentage,
		totalexperience: request.body.totalexperience,
		highestqualification: request.body.highestqualification,
		email: request.body.email,
		jobtitle: request.body.jobtitle,
		resume: request.body.resume,
		currentctc: request.body.currentctc,
		dateofbirth: request.body.dateofbirth
	}

	db
		.collection('IMuserdetails')
		.add(newuserdetailsItem)
		.then((doc) => {
			const responseuserdetailsItem = newuserdetailsItem;
			responseuserdetailsItem.id = doc.id;
			return response.json(responseuserdetailsItem);
		})
		.catch((error) => {
			console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};