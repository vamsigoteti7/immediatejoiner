const { db } = require('../util/admin');

exports.postQualification = (request, response) => {

    const newquaItem = {
        qualificationid: request.body.qualificationid,
        qualificationname: request.body.qualificationname
    }

    db
        .collection('IMQualification')
        .add(newquaItem)
        .then((doc) => {
            const responsequaItem = newquaItem;
            responsequaItem.id = doc.id;
            return response.json(responsequaItem);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ error: 'Something went wrong' });
        });
};

exports.getAllQualifications = (request, response) => {
    db
        .collection('IMQualification')
        .orderBy('qualificationid', 'desc')
        .get()
        .then((data) => {
            let qualf = [];
            data.forEach((doc) => {
                qualf.push({
                    qualificationdocid: doc.id,
                    qualificationid: doc.data().qualificationid,
                    qualificationname: doc.data().qualificationname
                });
            });
            return response.json(qualf);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};
