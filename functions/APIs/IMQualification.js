const { db } = require('../util/admin');

exports.getAllQualification = (request, response) => {
    db
        .collection('IMQualification')
        .orderBy('Qualificationid', 'desc')
        .get()
        .then((data) => {
            let qual = [];
            data.forEach((doc) => {
                qual.push({
                    Qualification: doc.id,
                    Qualificationid: doc.data().Qualificationid,
                    Qualificationname: doc.data().Qualificationname
                });
            });
            return response.json(qual);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};


exports.postQualification = (request, response) => {

    const newQuaItem = {
        Qualificationid: request.body.Qualificationid,
        Qualificationname: request.body.Qualificationname
    }

    db
        .collection('IMQualification')
        .add(newQuaItem)
        .then((doc) => {
            const responseQuaItem = newQuaItem;
            responseQuaItem.id = doc.id;
            return response.json(responseQuaItem);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ error: 'Something went wrong' });
        });
};



