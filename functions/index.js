const functions = require('firebase-functions');
const express = require('express');
const app = express();

const {
  getAllImmediateJoiners,
  postRegister,
  getregisterdetailsById,
  uploadProfilePhoto
} = require('./APIs/IMRegister')

const {
  getAllcontacts,
  postContactus,
  getcontactusById
} = require('./APIs/IMContactus')

const {
  getAlljobapplications,
  postJobapplications,
  getjobapplicationsById
} = require('./APIs/IMJobapplications')

const {
  getAlljobposts,
  getJobPostById,
  postJob
} = require('./APIs/IMJobpost')

const {
  getAllIMUserdetails,
  postuserdetails,
  getuserdetailsById
} = require('./APIs/IMUserdetails')


const {
  getAllemployemembershipdetail,
  postemployemembershipdetail,
  getemployememdetailsById
} = require('./APIs/IMemployemembershipdetail')

const {
  getAllemployermembershipdetails,
  postemployermembershipdetails,
  getemployermemdetailsById
} = require('./APIs/IMemployermembershipdetails')

const {
  getAllemployemembershipprice,
  postemployemembershipprice,
  getemployemempriceById
} = require('./APIs/IMEmployemembershipprice')

const {
  getAllemployermembershipprice,
  postemployermembershipprice,
  getemployermempriceById
} = require('./APIs/IMEmployermembershipprice')

const {
  postindustries
} = require('./APIs/IMIndustries')


app.get('/imjoiners', getAllImmediateJoiners);
app.post('/impostRegisterus', postRegister);
app.post('/impostRegisterdetailsbyidus', getregisterdetailsById);

app.get('/imcontactus', getAllcontacts);
app.post('/impostcontactus', postContactus);
app.post('/impostcontactusbyid', getcontactusById);

app.get('/imjobapplications', getAlljobapplications);
app.post('/imuserjobapplications', postJobapplications);
app.post('/imuserjobapplicationsbyid', getjobapplicationsById);

app.get('/imjobposts', getAlljobposts);
app.post('/imjobpostsbyid', getJobPostById);
app.post('/impostjob', postJob);

app.get('/imuserdetails', getAllIMUserdetails);
app.post('/impostuserdetails', postuserdetails);
app.post('/impostuserdetailsbyid', getuserdetailsById);

app.get('/immempmemdetail', getAllemployemembershipdetail);
app.post('/impostempmemdetail', postemployemembershipdetail);
app.post('/impostempmemdetailbyid', getemployememdetailsById);

app.get('/imemployerdetails', getAllemployermembershipdetails);
app.post('/impostemployermemdetail', postemployermembershipdetails);
app.post('/impostemployermemdetailbyid', getemployermemdetailsById);

app.get('/imemployemembershipprice', getAllemployemembershipprice);
app.post('/impostemployememprice', postemployemembershipprice);
app.post('/impostemployemempricebyid', getemployemempriceById);

app.get('/imemployermembershipprice', getAllemployermembershipprice);
app.post('/impostemployermemprice', postemployermembershipprice);
app.post('/impostemployermempricebyid', getemployermempriceById);

app.post('/imindustiries', postindustries);

app.post('/uploadprofilephoto', uploadProfilePhoto);

app.post('/hello', (req, res) => {
  if (req.method != "POST") {
    res.status(400).send("I am not happy");
    return;
  }
  res.end("Received POST request!");
});
app.get('/', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In London, the clock strikes:
          <span id="bongs">${'BONG '.repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
});

exports.app = functions.https.onRequest(app);