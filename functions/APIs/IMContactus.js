const { db } = require('../index');

exports.getAllcontacts = (request, response) => {
	db
		.collection('IMcontactus')
		.get()
		.then((data) => {
			let contactus = [];
			data.forEach((doc) => {
				contactus.push({
					contactus: doc.id,
					firstname: doc.data().firstname,
					lastname: doc.data().lastname,
					message: doc.data().message,
					description: doc.data().description,
					createddate: doc.data().createddate
				});
			});
			return response.json(contactus);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

exports.postContactus = (request, response) => {

	const newContactUsItem = {
		firstname: request.body.firstname,
		lastname: request.body.lastname,
		message: request.body.message,
		subject: request.body.subject,
		useremailid: request.body.useremailid,
		createddate: new Date().toISOString()
	}
	
	db
		.collection('IMcontactus')
		.add(newContactUsItem)
		.then((doc) => {
			const responsecontactusItem = newContactUsItem;
			responsecontactusItem.id = doc.id;
			return response.json(responsecontactusItem);
		})
		.catch((error) => {
			console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};
exports.getcontactusById = (request, response) => {

	var docRef = db.collection("IMcontactus").doc(request.body.docid);

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
