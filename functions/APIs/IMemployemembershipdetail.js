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