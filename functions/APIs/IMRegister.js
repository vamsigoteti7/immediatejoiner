const { db,admin } = require('../util/admin');

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

// Upload profile picture
exports.uploadProfilePhoto = (request, response) => {
	
    const BusBoy = require('busboy');
	const path = require('path');
	const os = require('os');
	const fs = require('fs');
	
	const busboy = new BusBoy({ headers: request.headers });
	
	let imageFileName;
	let imageToBeUploaded = {};
	
	busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
		if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
			return response.status(400).json({ error: 'Wrong file type submited' });
		}
		const imageExtension = filename.split('.')[filename.split('.').length - 1];
        imageFileName = `${request.user.username}.${imageExtension}`;
		const filePath = path.join(os.tmpdir(), imageFileName);
		imageToBeUploaded = { filePath, mimetype };
		file.pipe(fs.createWriteStream(filePath));
    });
    // // deleteImage(imageFileName);
	 busboy.on('finish', () => {
		admin
			.storage()
			.bucket()
			.upload(imageToBeUploaded.filePath, {
				resumable: false,
				metadata: {
					metadata: {
						contentType: imageToBeUploaded.mimetype
					}
				}
			})
			.then(() => {
				//const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
				// return db.doc(`/users/${request.user.username}`).update({
				// 	imageUrl
				// });
			})
			.then(() => {
				return response.json({ message: 'Image uploaded successfully' });
			})
			.catch((error) => {
				console.error(error);
				return response.status(500).json({ error: error.code });
			});
	 });
	 busboy.end(request.rawBody);
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
exports.getregisterdetailsById = (request, response) => {

	var docRef = db.collection("IMRegister").doc(request.body.docid);

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
