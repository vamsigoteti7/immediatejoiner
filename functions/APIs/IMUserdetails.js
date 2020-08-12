const { db } = require('../util/admin');

exports.getAllIMUserdetails= (request, response) => {
	db
		.collection('IMuserdetails')
		.get()
		.then((data) => {
			let ud = [];
			data.forEach((doc) => {
				ud.push({
	                userdetailId: doc.id,
                    username: doc.data().username,
                    phonenumber: doc.data().phonenumber,
                    location: doc.data().location,
                    percentage: doc.data().percentage,
                    totalexperience: doc.data().totalexperience,
                    highestqualification: doc.data().highestqualification,
                    email: doc.data().email,
                    jobtitle: doc.data().jobtitle,
                    resume: doc.data().resume,
                    currentctc: doc.data().currentctc                 
				});
			});
			return response.json(ud);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};