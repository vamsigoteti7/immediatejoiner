const admin = require('firebase-admin');

exports.getAllIndustries = (request, response) => {
    admin.firestore()
        .collection('IMIndustries')
        .orderBy('industryid', 'desc')
        .get()
        .then((data) => {
            let indust = [];
            data.forEach((doc) => {
                indust.push({
                    industtry: doc.id,
                    industryid: doc.data().industryid,
                    industryname: doc.data().industryname
                });
            });
            return response.json(indust);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};


exports.postindustries = (request, response) => {

    const newindustryItem = {
        industryid: request.body.industryid,
        industryname: request.body.industryname
    }

    admin.firestore()
        .collection('IMIndustries')
        .add(newindustryItem)
        .then((doc) => {
            const responseindustryItem = newindustryItem;
            responseindustryItem.id = doc.id;
            return response.json(responseindustryItem);
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ error: 'Something went wrong' });
        });
};