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
                         companylogo: doc.data().companylogo,
                         experience: doc.data().experience,
                         gender: doc.data().gender,
                         jobid: doc.data().jobid,
                         jobposteddate: doc.data().jobposteddate,
                         jobpostexpires: doc.data().jobpostexpires,
                         place: doc.data().place,
                         jobdescription: doc.data().jobdescription,
                         jobtype: doc.data().jobtype,
                         vacancies: doc.data().vacancies,
                         username: doc.data().username,
                         recruiteremail: doc.data().recruiteremail,
                         recruiterphonenumber: doc.data().recruiterphonenumber,
                         recruiterlinkdinlink: doc.data().recruiterlinkdinlink,
                         recruiterwebsite: doc.data().recruiterwebsite,
                         salary: doc.data().salary,
                         tagline: doc.data().tagline
                    });
               });
               return response.json(jp);
          })
          .catch((err) => {
               console.error(err);
               return response.status(500).json({ error: err.code });
          });
};

exports.getJobPostById = (request, response) => {
     var docRef = db.collection("IMjobpost").doc(request.params.docid);

     docRef.get().then(function (doc) {
          if (doc.exists) {
               return response.json(doc.data());
          } else {
               // doc.data() will be undefined in this case
               return response.json({ "status": "no such document" });
          }
     }).catch(function (error) {
          console.log("Error getting document:", error);
     });
};
