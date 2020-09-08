const { db } = require('../util/admin');

exports.getAlljobapplications = (request, response) => {
	db
		.collection('IMuserjobapplications')
		.get()
		.then((data) => {
			let jobap = [];
			data.forEach((doc) => {
				jobap.push({
					jobid: doc.id,
					username: doc.data().username,
					jobid: doc.data().jobid
				});
			});
			return response.json(jobap);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

exports.getjobapplicationsByJobId = (request, response) => {
	db
		.collection('IMuserjobapplications')
		.where('jobid', '==', request.body.jobid)
		.get()
		.then((data) => {
			let jobap = [];
			data.forEach((doc) => {
				jobap.push(
					doc.data().username
				);
			});
			if (jobap.length > 0) {
				db
					.collection('IMuserdetails')
					.where('email', 'in', jobap)
					.get()
					.then((userdata) => {
						let empdata = [];
						userdata.forEach((doc) => {
							empdata.push(
								doc.data()
							);
						});

						return response.json(empdata);
					})
					.catch((err) => {
						console.error(err);
						return response.status(500).json({ error: err.code });
					});
			}
			else
			{
				return response.json({"data": "No Data"});
			}
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

exports.postJobapplications = (request, response) => {

	const newJobappItem = {
		username: request.body.username,
		jobid: request.body.jobid
	}

	db
		.collection('IMuserjobapplications')
		.add(newJobappItem)
		.then((doc) => {
			const responseJobappItem = newJobappItem;
			responseJobappItem.id = doc.id;
			return response.json(responseJobappItem);
		})
		.catch((error) => {
			console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};



exports.getjobapplicationsById = (request, response) => {

	var docRef = db.collection("IMuserjobapplications").doc(request.body.docid);

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
