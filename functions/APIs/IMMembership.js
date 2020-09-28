const admin = require('firebase-admin');

exports.getMembershipPlansByType = (request, response) => {
	admin.firestore()
		.collection('IMMembershipPlans')
		.where('MemberType', '==', request.body.membertype)
		.get()
		.then((data) => {
			let plans = [];
			data.forEach((doc) => {
				plans.push({
					"membertype": doc.data().MemberType,
					"price": doc.data().price,
					"description": doc.data().description,
					"buttonText": doc.data().buttonText,
					"title": doc.data().title,
					"currency": doc.data().currency,
					"countryid": doc.data().countryid,
					"paymentdescription": doc.data().paymentdescription
				});
			});
			return response.json(plans);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};
