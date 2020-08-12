const { db } = require('../util/admin');

exports.getAllImmediateJoiners = (request, response) => {
	db
		.collection('IMRegister')
		.where('username', '==', request.body.username)
		.where('password', '==', request.body.password)
		.get()
		.then((data) => {
			let immediatejoiners = [];
			data.forEach((doc) => {
				immediatejoiners.push({
					immediatejoinerId: doc.id,
					firstname: doc.data().firstname,
					password: doc.data().password,
					usertype: doc.data().usertype,
					username: doc.data().username
				});
			});
			return response.json(immediatejoiners);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

exports.postRegister = (request, response) => {

	const newRegisterUsItem = {
		firstname: request.body.firstname,
		username: request.body.username,
		usertype: request.body.usertype,
		password: request.body.password,

	}

	db
		.collection('IMRegister')
		.add(newRegisterUsItem)
		.then((doc) => {
			const responseRegisterusItem = newRegisterUsItem;
			responseRegisterusItem.id = doc.id;
			return response.json(responseRegisterusItem);
		})
		.catch((error) => {
			console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};