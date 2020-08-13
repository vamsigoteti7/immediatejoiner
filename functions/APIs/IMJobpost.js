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
exports.postJob = (request, response) => {

     const newJobpostItem = {
          username: request.body.username,
          companyname: request.body.companyname,
          companylogo: request.body.companylogo,
          experience: request.body.experience,
          gender: request.body.gender,
          jobtype: request.body.jobtype,
          jobid: request.body.jobid,
          jobposteddate: request.body.jobposteddate,
          jobpostexpires: request.body.jobpostexpires,
          jobdescription: request.body.jobdescription,
          place: request.body.place,
          vacancies: request.body.vacancies,
          recruiteremail: request.body.recruiteremail,
          recruiterlinkdinlink: request.body.recruiterlinkdinlink,
          recruiterphonenumber: request.body.recruiterphonenumber,
          recruiterwebsite: request.body.recruiterwebsite,
          salary: request.body.salary,
          tagline: request.body.tagline
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
               return response.json({"status":doc.data()});
          } else {
               // doc.data() will be undefined in this case
               return response.json({ "status": "no such document" });
          }
     }).catch(function (error) {
          console.log("Error getting document:", error);
     });
};
