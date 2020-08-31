const { db, admin } = require('../util/admin');

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
                         skills: doc.data().skills,
                         jobdescription: doc.data().jobdescription,
                         companyname: doc.data().companyname,
                         tagline: doc.data().tagline,
                         companydescription: doc.data().companydescription,
                         companywebsite: doc.data().companywebsite,
                         linkedinusername: doc.data().linkedinusername,
                         experiencerequired: doc.data().experiencerequired,
                         recruiterimageurl: doc.data().recruiterimageurl,
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
          recruiterimageurl: request.body.recruiterimageurl,
          companylogourl: request.body.companylogourl,
          createddate: admin.firestore.Timestamp.fromDate(new Date())
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

exports.getjobpostsByRecruiterId = (request, response) => {
     db
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
                         recruiterimageurl: doc.data().recruiterimageurl,
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
     var ref = db.collection("IMjobpost").orderBy('createddate', 'desc').where('email', '==', request.body.email);
     ref.get().then(function (snapshot) {
          let jp = [];
          // snapshot.forEach(function (doc) {
          //      jp.push(doc.data());
          // });

          var last;
          ref.limit(1).get().then(function (snapshot) {
               snapshot.forEach(function (doc) {
                    jp.push(doc.data());
                    last = doc;
               });
               return response.json({ "data": jp, "last": last });
          })
     });
};

exports.getjobpostsByStartAfter = (request, response) => {
     var ref = db.collection("IMjobpost").orderBy('createddate', 'desc').where('email', '==', request.body.email);

     ref.get().then(function (snapshot) {
          let jp = [];

          var docRef = db.collection("IMjobpost").doc(request.body.docid);

          docRef.get().then(function (doc) {
               if (doc.exists) {
                    ref.startAfter(doc).limit(1).get().then(function (snapshot) {
                         snapshot.forEach(function (doc) {
                              jp.push(doc.data());
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
