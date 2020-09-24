const admin = require('firebase-admin');

exports.getAllemployermembershipprice = (request, response) => {
    admin.firestore()
        .collection('IMemployermembershipprice')
        .get()
        .then((data) => {
            let emd = [];
            data.forEach((doc) => {
                emd.push({
                    emppriceId: doc.id,
                    enddate: doc.data().enddate,
                    createddate: doc.data().createddate,
                    price: doc.data().price,
                    membershippriceid: doc.data().membershippriceid,
                    startdate: doc.data().startdate,
                    usertype: doc.data().usertype,

                });
            });
            return response.json(emd);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};
exports.postemployermembershipprice = (request, response) => {

    const newemployermempriceItem = {
        enddate: request.body.enddate,
        price: request.body.price,
        membershippriceid: request.body.membershippriceid,
        startdate: request.body.startdate,
        usertype: request.body.usertype,
        createddate: new Date().toISOString()
    }

    admin.firestore()
        .collection('IMemployermembershipprice')
        .add(newemployermempriceItem)
        .then((doc) => {
            const responseemployermempriceItem = newemployermempriceItem;
            responseemployermempriceItem.id = doc.id;
            return response.json(responseemployermempriceItem);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ error: 'Something went wrong' });
        });
};
exports.getemployermempriceById = (request, response) => {

	var docRef = admin.firestore().collection("IMemployermembershipprice").doc(request.body.docid);

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
