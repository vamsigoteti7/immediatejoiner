const { db } = require('../util/admin');

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