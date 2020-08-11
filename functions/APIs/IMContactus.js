const { db } = require('../util/admin');

exports.getAllcontacts = (request, response) => {
	db
		.collection('IMcontactus')
		.get()
		.then((data) => {
			let contactus= [];
			data.forEach((doc) => {
				contactus.push({
	                contactus: doc.id,
                    lastname: doc.data().firstname,
                    message:doc.data().message,
                    description:doc.data().description

				});
			});
			return response.json(contactus);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.postContactus = (request, response) => {
	if (request.body.body.trim() === '') {
		return response.status(400).json({ body: 'Must not be empty' });
    }
    
    const newContactUsItem = {
        firstname: request.body.firstname,
		lastname: request.user.lastname,
		message: request.user.message,
		subject: request.user.subject,
		useremailid: request.user.useremailid,
        createddate: new Date().toISOString()
    }

    db
        .collection('IMcontactus')
        .add(newContactUsItem)
        .then((doc)=>{
            const responsecontactusItem = newContactUsItem;
            responsecontactusItem.id = doc.id;
            return response.json(responsecontactusItem);
        })
        .catch((error) => {
            console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};