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


app.get('/imjoiners', getAllImmediateJoiners);
app.get('/imcontactus', getAllcontacts);
app.get('/impostcontactus', postContactus);
app.get('/imjobapplications', getAlljobapplications);

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