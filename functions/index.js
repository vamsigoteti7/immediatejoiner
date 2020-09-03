const functions = require('firebase-functions');
const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const bodyParser = require('body-parser');
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const cors = require("cors");
const app = express();
const { resolve } = require("path");

app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (req.originalUrl === '/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

const {
  getAllImmediateJoiners,
  getAllImmediateJoiner,
  postRegister,
  getregisterdetailsById,
  uploadProfilePhoto
} = require('./APIs/IMRegister')

const {
  getallgender
} = require('./APIs/IMGender')

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
  postJob,
  getjobpostsByRecruiterId,
  getjobpostsByDocid,
  getjobpostsByStartAfter
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
  getAllIndustries,
  postindustries
} = require('./APIs/IMIndustries')


const {
  getAllQualification,
  postQualification
} = require('./APIs/IMQualification')

const {
  postCountries,
  getallcountries
} = require('./APIs/IMCountries')

const {
  postCities,
  getcitiesbycountryid
} = require('./APIs/IMCities')

const {
  getallexperience,
  postExperience
} = require('./APIs/IMExperience')

const {
  MembershipPublickey,
  MembershipProductDetails,
  CreatePaymentIntent,
  Membershipwebhook
} = require('./APIs/IMMembership')

app.get('/public-key', MembershipPublickey);
app.get('/product-details', MembershipProductDetails);
app.post('/create-payment-intent', CreatePaymentIntent);
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), Membershipwebhook);

app.get('/imgetexperience', getallexperience);
app.get('/imgetgender', getallgender);
app.post('/impostexperience', postExperience);
app.post('/impostcountry', postCountries);
app.get('/imgetcountrys', getallcountries);

app.post('/impostcity', postCities);
app.post('/imgetcitybyid', getcitiesbycountryid);

app.post('/imjoiners', getAllImmediateJoiners);
app.post('/imjoiner', getAllImmediateJoiner);
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
app.post('/imjobpostbyrecruiterid', getjobpostsByRecruiterId);
app.post('/imjobpostsByDocid', getjobpostsByDocid);
app.post('/imjobpostsByStartAfter', getjobpostsByStartAfter);

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

app.get('/imgetindustries', getAllIndustries);
app.post('/impostindustiries', postindustries);

app.get('/imgetqualification', getAllQualification);
app.post('/impostqualification', postQualification);

app.post('/uploadprofilephoto', uploadProfilePhoto);



exports.app = functions.https.onRequest(app);