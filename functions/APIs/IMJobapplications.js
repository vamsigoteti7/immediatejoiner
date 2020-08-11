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
                    jobid:doc.data().jobid
				});
			});
			return response.json(jobap);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};