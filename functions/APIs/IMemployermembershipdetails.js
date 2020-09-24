const { db } = require('../index');

exports.getAllemployermembershipdetails = (request, response) => {
    db
        .collection('IMemployermembershipdetails')
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
                    validupto: doc.data().validupto,
                    utilizedammount: doc.data().utilizedammount
                });
            });
            return response.json(emd);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};
exports.postemployermembershipdetails = (request, response) => {

    const newemployermemItem = {
        username: request.body.username,
        paidammount: request.body.paidammount,
        membershippriceid: request.body.membershippriceid,
        validupto: request.body.validupto,
        utilizedammount: request.body.utilizedammount,
        createddate: new Date().toISOString()
    }

    db
        .collection('IMemployermembershipdetails')
        .add(newemployermemItem)
        .then((doc) => {
            const responseemployermemItem = newemployermemItem;
            responseemployermemItem.id = doc.id;
            return response.json(responseemployermemItem);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ error: 'Something went wrong' });
        });
};
exports.getemployermemdetailsById = (request, response) => {

	var docRef = db.collection("IMemployermembershipdetails").doc(request.body.docid);

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
