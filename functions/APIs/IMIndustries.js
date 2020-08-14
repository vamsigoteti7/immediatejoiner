exports.postindustries = (request, response) => {

    const newindustryItem = {
        industryid: request.body.industryid,
        industryname: request.body.industryname
    }

    db
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