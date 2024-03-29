const admin = require('firebase-admin');

exports.getuserjobs = (request, response) => {
	admin.firestore()
        .collection('IMUserJobs')
        .doc(request.body.userid)
		.get()
		.then((data) => {
			let userjobs = [];
			data.forEach((doc) => {
				countrys.push({
					userid: doc.data().userid,
					jobcount: doc.data().jobcount
				});
			});
			return response.json(userjobs);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};