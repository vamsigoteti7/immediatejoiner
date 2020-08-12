const { db } = require('../util/admin');

exports.getAllemployemembershipdetail = (request, response) => {
    db
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

    db
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