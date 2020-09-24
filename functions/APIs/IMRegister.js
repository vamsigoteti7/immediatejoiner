const admin = require('firebase-admin');

exports.getAllImmediateJoiners = (request, response) => {
	admin.firestore()
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

exports.getAllImmediateJoiner = (request, response) => {
	admin.firestore()
		.collection('IMRegister')
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
		//12345678900.png
		imageFileName = `${Math.round(Math.random()*100000000000)}.${imageExtension}`;
		const filepath = path.join(os.tmpdir(), imageFileName);
		imageTobeUploaded = {filepath, mimeType};
		file.pipe(fs.createWriteStream(filepath));
	});
	// // deleteImage(imageFileName);
	busboy.on('finish', () => {
		admin.storage().bucket().upload(imageTobeUploaded.filepath, {
			resumable: false,
			metadata:{
				metadata:{
					contentType:imageTobeUploaded.mimeType
				}
			}
		})
		.then( () => {
			//const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`
		   // return db.doc(`/users/${req.user.handle}`).update({imageUrl});
		})
		.then( () => {
			return res.json({message: "Image Uploaded Successfully"});
		})
		.catch(err => {
			console.error(err);
			return res.status(400).json({ error : err.code});
		})
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

	admin.firestore()
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

	var docRef = admin.firestore().collection("IMRegister").doc(request.body.docid);

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
