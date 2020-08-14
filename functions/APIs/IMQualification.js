const { db } = require('../util/admin');

exports.postQualification = (request, response) => {

    const newquaItem = {
        qualificationid: request.body.qualificationid,
        qualificationname: request.body.qualificationname
    }

    db
        .collection('IMQualificaton')
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
