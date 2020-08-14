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
        .collection('IMQualificaton')
        .get()
        .then((data) => {
            return response.json({ "data": data.data() });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};
