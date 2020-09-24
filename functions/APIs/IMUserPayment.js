const admin = require('firebase-admin');

exports.getuserpaymentbyid = (request, response) => {
	admin.firestore()
		.collection('IMUserPayments')
        .where('userid', '==', request.body.userid)
        .orderBy('createdDate','desc')
        .limit(1)
		.get()
		.then((data) => {
			let userpayments = [];
			data.forEach((doc) => {
				userpayments.push({
					userid: doc.data().userid,
                    createdDate: doc.data().createdDate,
                    payment:doc.data().payment
				});
			});
			return response.json(userpayments);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};