const { db } = require('../util/admin');

exports.getAlljobposts = (request, response) => {
     db
          .collection('IMjobpost')
          .get()
          .then((data) => {
               let jp = [];
               data.forEach((doc) => {
                    jp.push({
                         jobpostid: doc.id,
                         companyname: doc.data().companyname,
                         email: doc.data().email,
                         jobtitle: doc.data().jobtitle,
                         country: doc.data().country,
                         city: doc.data().city,
                         industry: doc.data().industry,
                         jobtype: doc.data().jobtype,
                         jobdescription: doc.data().jobdescription,
                         companyname: doc.data().companyname,
                         tagline: doc.data().tagline,
                         companydescription: doc.data().companydescription,
                         companywebsite: doc.data().companywebsite,
                         linkedinusername: doc.data().linkedinusername,
                         experiencerequired:doc.data().experiencerequired
                    });
               });
               return response.json(jp);
          })
          .catch((err) => {
               console.error(err);
               return response.status(500).json({ error: err.code });
          });
};
exports.postJob = (request, response) => {

     const newJobpostItem = {
          email: request.body.email,
          jobtitle: request.body.jobtitle,
          country: request.body.country,
          city: request.body.city,
          industry: request.body.industry,
          jobtype: request.body.jobtype,
          jobdescription: request.body.jobdescription,
          companyname: request.body.companyname,
          tagline: request.body.tagline,
          companydescription: request.body.companydescription,
          companywebsite: request.body.companywebsite,
          linkedinusername: request.body.linkedinusername,
          experiencerequired:request.body.experiencerequired,
          createddate: new Date().toISOString()
     }

     db
          .collection('IMjobpost')
          .add(newJobpostItem)
          .then((doc) => {
               const responseJobpostItem = newJobpostItem;
               responseJobpostItem.id = doc.id;
               return response.json(responseJobpostItem);
          })
          .catch((error) => {
               console.error(error);
               response.status(500).json({ error: 'Something went wrong' });
          });
};

exports.getJobPostById = (request, response) => {

     var docRef = db.collection("IMjobpost").doc(request.body.docid);

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
