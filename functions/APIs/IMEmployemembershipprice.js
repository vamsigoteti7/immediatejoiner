const { db } = require('../index');

exports.getAllemployemembershipprice = (request, response) => {
    db
        .collection('IMemployemembershipprice')
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
                    startdate: doc.data().startdate
                });
            });
            return response.json(emd);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.postemployemembershipprice = (request, response) => {

    const newempmempriceItem = {
        enddate: request.body.enddate,
        price: request.body.price,
        membershippriceid: request.body.membershippriceid,
        startdate: request.body.startdate,
        createddate: new Date().toISOString()
    }

    db
        .collection('IMemployemembershipprice')
        .add(newempmempriceItem)
        .then((doc) => {
            const responseempmempriceItem = newempmempriceItem;
            responseempmempriceItem.id = doc.id;
            return response.json(responseempmempriceItem);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ error: 'Something went wrong' });
        });
};
exports.getemployemempriceById = (request, response) => {

	var docRef = db.collection("IMemployemembershipprice").doc(request.body.docid);

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
