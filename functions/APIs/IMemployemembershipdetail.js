const admin = require('firebase-admin');

exports.getAllemployemembershipdetail = (request, response) => {
    admin.firestore()
        .collection('IMemployemembershipdetail')
        .get()
        .then((data) => {
            let emd = [];
            data.forEach((doc) => {
                emd.push({
                    empdetailsId: doc.id,
                    username: doc.data().username,
                    createddate: doc.data().createddate,
                    paidammount: doc.data().paidammount,
                    membershippriceid: doc.data().membershippriceid,
                    validupto: doc.data().validupto
                });
            });
            return response.json(emd);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.postemployemembershipdetail = (request, response) => {

    const newempmemItem = {
        username: request.body.username,
        createddate: request.body.createddate,
        paidammount: request.body.paidammount,
        membershippriceid: request.body.membershippriceid,
        validupto: request.body.validupto
    }

    admin.firestore()
        .collection('IMemployemembershipdetail')
        .add(newempmemItem)
        .then((doc) => {
            const responseempmemItem = newempmemItem;
            responseempmemItem.id = doc.id;
            return response.json(responseempmemItem);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ error: 'Something went wrong' });
        });
};
exports.getemployememdetailsById = (request, response) => {

	var docRef = admin.firestore().collection("IMemployemembershipdetail").doc(request.body.docid);

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
