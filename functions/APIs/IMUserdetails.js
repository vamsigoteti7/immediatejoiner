const { db } = require('../index');

exports.getAllIMUserdetails = (request, response) => {
	db
		.collection('IMuserdetails')
		.get()
		.then((data) => {
			let ud = [];
			data.forEach((doc) => {
				ud.push({
					userdetailId: doc.id,
					email: doc.data().email,
					phonenumber: doc.data().phonenumber,
					age: doc.data().age,
					gender: doc.data().gender,
					country: doc.data().country,
					city: doc.data().city,
					industry: doc.data().industry,
					highestqualification: doc.data().highestqualification,
					percentage: doc.data().percentage,
					totalexperience: doc.data().totalexperience,
					skills: doc.data().skills,
					resumeurl: doc.data().resumeurl,
					currentsalary: doc.data().currentsalary
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
		email: request.body.email,
		phonenumber: request.body.phonenumber,
		age: request.body.age,
		gender: request.body.gender,
		country: request.body.country,
		city: request.body.city,
		industry: request.body.industry,
		highestqualification: request.body.highestqualification,
		percentage: request.body.percentage,
		totalexperience: request.body.totalexperience,
		skills: request.body.skills,
		resumeurl: request.body.resumeurl,
		currentsalary: request.body.currentsalary
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
exports.getuserdetailsById = (request, response) => {

	var docRef = db.collection("IMuserdetails").doc(request.body.docid);

	docRef.get().then(function (doc) {
		if (doc.exists) {
			return response.json({ "data": doc.data() });
		} else {
			// doc.data() will be undefined in this case
			return response.json({ "status": "no such document" });
		}
	}).catch(function (error) {
		console.log("Error getting document:", error);
	});
};
