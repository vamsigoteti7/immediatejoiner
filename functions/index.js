const functions = require('firebase-functions');
const express = require('express');
const app = express();

const {
  getAllImmediateJoiners
} = require('./APIs/IMRegister')

const {
  getAllcontacts,
  postContactus
} = require('./APIs/IMContactus')

const {
  getAlljobapplications
} = require('./APIs/IMJobapplications')

const {
  getAlljobposts
} = require('./APIs/IMJobpost')

const {
  getAllIMUserdetails
} = require('./APIs/IMUserdetails')


const {
  getAllemployemembershipdetail
} = require('./APIs/IMemployemembershipdetail')

const {
  getAllemployermembershipdetails
} = require('./APIs/IMemployermembershipdetails')

const {
  getAllemployemembershipprice
} = require('./APIs/IMEmployemembershipprice')

const {
  getAllemployermembershipprice
} = require('./APIs/IMEmployermembershipprice')


app.get('/imjoiners', getAllImmediateJoiners);
app.get('/imcontactus', getAllcontacts);
app.post('/impostcontactus', postContactus);
app.get('/imjobapplications', getAlljobapplications);
app.get('/imjobposts', getAlljobposts);
app.get('/imuserdetails', getAllIMUserdetails);
app.get('/immemdetail', getAllemployemembershipdetail);
app.get('/imemployerdetails', getAllemployermembershipdetails);
app.get('/imemployemembershipprice', getAllemployemembershipprice);
app.get('/imemployermembershipprice', getAllemployermembershipprice);





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