const admin = require('firebase-admin');

exports.getAlljobposts = (request, response) => {
     admin.firestore()
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
                         skills: doc.data().skills,
                         jobdescription: doc.data().jobdescription,
                         companyname: doc.data().companyname,
                         tagline: doc.data().tagline,
                         companydescription: doc.data().companydescription,
                         companywebsite: doc.data().companywebsite,
                         linkedinusername: doc.data().linkedinusername,
                         experiencerequired: doc.data().experiencerequired,
                         companylogourl: doc.data().companylogourl
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
          skills: request.body.skills,
          jobdescription: request.body.jobdescription,
          companyname: request.body.companyname,
          companydescription: request.body.companydescription,
          companywebsite: request.body.companywebsite,
          experiencerequired: request.body.experiencerequired,
          companylogourl: request.body.companylogourl,
          createddate: admin.firestore.Timestamp.fromDate(new Date())
     }

     admin.firestore()
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

exports.getjobpostsByRecruiterId = (request, response) => {
     admin.firestore()
          .collection('IMjobpost')
          .orderBy("createddate", "desc")
          .where('email', '==', request.body.email)
          .limit(1)
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
                         skills: doc.data().skills,
                         jobdescription: doc.data().jobdescription,
                         companyname: doc.data().companyname,
                         tagline: doc.data().tagline,
                         companydescription: doc.data().companydescription,
                         companywebsite: doc.data().companywebsite,
                         linkedinusername: doc.data().linkedinusername,
                         experiencerequired: doc.data().experiencerequired,
                         companylogourl: doc.data().companylogourl,
                         createddate: doc.data().createddate
                    });
               });
               return response.json(jp);
          })
          .catch((err) => {
               console.error(err);
               return response.status(500).json({ error: err.code });
          });
};

exports.getjobpostsByDocid = (request, response) => {
     var ref = admin.firestore().collection("IMjobpost").orderBy('createddate', 'desc').where('email', '==', request.body.email);
     ref.get().then(function (snapshot) {
          let jp = [];
          ref.limit(2).get().then(function (snapshot) {
               snapshot.forEach(function (doc) {
                    jp.push({
                         jobtitle: doc.data().jobtitle,
                         companyname: doc.data().companyname,
                         companylogourl: doc.data().companylogourl,
                         email: doc.data().email,
                         city: doc.data().city,
                         jobtype: doc.data().jobtype,
                         jobpostid: doc.id
                    });
               });
               return response.json({ jp });
          })
     });
};

exports.getjobpostsByStartAfter = (request, response) => {
     var ref = admin.firestore().collection("IMjobpost").orderBy('createddate', 'desc').where('email', '==', request.body.email);

     ref.get().then(function (snapshot) {
          let jp = [];

          var docRef = admin.firestore().collection("IMjobpost").doc(request.body.docid);

          docRef.get().then(function (doc) {
               if (doc.exists) {
                    ref.startAfter(doc).limit(2).get().then(function (snapshot) {
                         snapshot.forEach(function (doc) {
                              jp.push({
                                   jobtitle: doc.data().jobtitle,
                                   companyname: doc.data().companyname,
                                   companylogourl: doc.data().companylogourl,
                                   email: doc.data().email,
                                   city: doc.data().city,
                                   jobtype: doc.data().jobtype,
                                   jobpostid: doc.id
                              });
                         })
                         return response.json({ jp });
                    });
               } else {
                    // doc.data() will be undefined in this case
                    return response.json({ "status": "no such document" });
               }
          }).catch(function (error) {
               console.log("Error getting document:", error);
          });
     });
};

exports.getjobsearchStartAfter = (request, response) => {
     var ref = admin.firestore().collection("IMjobpost").orderBy('createddate', 'desc').where('industry', '==', request.body.industry).where('city', '==', request.body.city);

     ref.get().then(function (snapshot) {
          let jp = [];

          var docRef = admin.firestore().collection("IMjobpost").doc(request.body.docid);

          docRef.get().then(function (doc) {
               if (doc.exists) {
                    ref.startAfter(doc).limit(2).get().then(function (snapshot) {
                         snapshot.forEach(function (doc) {
                              jp.push({
                                   jobtitle: doc.data().jobtitle,
                                   companyname: doc.data().companyname,
                                   companylogourl: doc.data().companylogourl,
                                   email: doc.data().email,
                                   city: doc.data().city,
                                   jobtype: doc.data().jobtype,
                                   jobpostid: doc.id
                              });
                         })
                         return response.json({ jp });
                    });
               } else {
                    // doc.data() will be undefined in this case
                    return response.json({ "status": "no such document" });
               }
          }).catch(function (error) {
               console.log("Error getting document:", error);
          });
     });
};


exports.getjobsearch = (request, response) => {
     var ref = admin.firestore().collection("IMjobpost").orderBy('createddate', 'desc').where('industry', '==', request.body.industry).where('city', '==', request.body.city);
     ref.get().then(function (snapshot) {
          let jp = [];
          ref.limit(2).get().then(function (snapshot) {
               snapshot.forEach(function (doc) {
                    jp.push({
                         jobtitle: doc.data().jobtitle,
                         companyname: doc.data().companyname,
                         companylogourl: doc.data().companylogourl,
                         email: doc.data().email,
                         city: doc.data().city,
                         jobtype: doc.data().jobtype,
                         jobpostid: doc.id
                    });
               });
               return response.json({ jp });
          })
     });
};


exports.getJobPostById = (request, response) => {

     var docRef = admin.firestore().collection("IMjobpost").doc(request.body.docid);

     docRef.get().then(function (doc) {
          if (doc.exists) {
               return response.json({
                    jobpostid: doc.id,
                    email: doc.data().email,
                    jobtitle: doc.data().jobtitle,
                    country: doc.data().country,
                    city: doc.data().city,
                    industry: doc.data().industry,
                    jobtype: doc.data().jobtype,
                    skills: doc.data().skills,
                    jobdescription: doc.data().jobdescription,
                    companyname: doc.data().companyname,
                    companydescription: doc.data().companydescription,
                    companywebsite: doc.data().companywebsite,
                    experiencerequired: doc.data().experiencerequired,
                    companylogourl: doc.data().companylogourl,
                    createddate: doc.data().createddate
               });
          } else {
               // doc.data() will be undefined in this case
               return response.json({ "status": "no such document" });
          }
     }).catch(function (error) {
          console.log("Error getting document:", error);
     });
};
