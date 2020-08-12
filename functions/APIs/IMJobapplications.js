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