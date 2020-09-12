
'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const env = require("dotenv").config({ path: "./.env" });
const express = require('express');
const bodyParser = require('body-parser');
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const cors = require("cors");
const app = express();
const { resolve } = require("path");

const { Logging } = require('@google-cloud/logging');
const logging = new Logging({
  projectId: process.env.GCLOUD_PROJECT,
});
const stripe = require('stripe')(functions.config().stripe.secret, {
  apiVersion: '2020-03-02',
});

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
  getjobapplicationsById,
  getjobapplicationsByJobId
} = require('./APIs/IMJobapplications')

const {
  getAlljobposts,
  getJobPostById,
  postJob,
  getjobpostsByRecruiterId,
  getjobpostsByDocid,
  getjobpostsByStartAfter,
  getjobsearch,
  getjobsearchStartAfter
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
app.post('/imuserjobapplicationsbyjobid', getjobapplicationsByJobId);


app.get('/imjobposts', getAlljobposts);
app.post('/imjobpostsbyid', getJobPostById);
app.post('/impostjob', postJob);
app.post('/imjobpostbyrecruiterid', getjobpostsByRecruiterId);
app.post('/imjobpostsByDocid', getjobpostsByDocid);
app.post('/imjobpostsByStartAfter', getjobpostsByStartAfter);
app.post('/imjobsearch', getjobsearch);
app.post('/imjobsearchstartafter', getjobsearchStartAfter);

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

/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * When a user is created, create a Stripe customer object for them.
 *
 * @see https://stripe.com/docs/payments/save-and-reuse#web-create-customer
 */
exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const customer = await stripe.customers.create({ email: user.email });
  const intent = await stripe.setupIntents.create({
    customer: customer.id,
  });
  await admin.firestore().collection('stripe_customers').doc(user.uid).set({
    customer_id: customer.id,
    setup_secret: intent.client_secret,
  });
  return;
});

/**
 * When adding the payment method ID on the client,
 * this function is triggered to retrieve the payment method details.
 */
exports.addPaymentMethodDetails = functions.firestore
  .document('/stripe_customers/{userId}/payment_methods/{pushId}')
  .onCreate(async (snap, context) => {
    try {
      const paymentMethodId = snap.data().id;
      const paymentMethod = await stripe.paymentMethods.retrieve(
        paymentMethodId
      );
      await snap.ref.set(paymentMethod);
      // Create a new SetupIntent so the customer can add a new method next time.
      const intent = await stripe.setupIntents.create({
        customer: paymentMethod.customer,
      });
      await snap.ref.parent.parent.set(
        {
          setup_secret: intent.client_secret,
        },
        { merge: true }
      );
      return;
    } catch (error) {
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      await reportError(error, { user: context.params.userId });
    }
  });

/**
 * When a payment document is written on the client,
 * this function is triggered to create the payment in Stripe.
 *
 * @see https://stripe.com/docs/payments/save-and-reuse#web-create-payment-intent-off-session
 */

// [START chargecustomer]

exports.createStripePayment = functions.firestore
  .document('stripe_customers/{userId}/payments/{pushId}')
  .onCreate(async (snap, context) => {
    const { amount, currency, payment_method } = snap.data();
    try {
      // Look up the Stripe customer id.
      const customer = (await snap.ref.parent.parent.get()).data().customer_id;
      // Create a charge using the pushId as the idempotency key
      // to protect against double charges.
      const idempotencyKey = context.params.pushId;
      const payment = await stripe.paymentIntents.create(
        {
          amount,
          currency,
          customer,
          payment_method,
          off_session: false,
          confirm: true,
          confirmation_method: 'manual',
        },
        { idempotencyKey }
      );
      // If the result is successful, write it back to the database.
      await snap.ref.set(payment);
    } catch (error) {
      // We want to capture errors and render them in a user-friendly way, while
      // still logging an exception with StackDriver
      console.log(error);
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      await reportError(error, { user: context.params.userId });
    }
  });

// [END chargecustomer]

/**
 * When 3D Secure is performed, we need to reconfirm the payment
 * after authentication has been performed.
 *
 * @see https://stripe.com/docs/payments/accept-a-payment-synchronously#web-confirm-payment
 */
exports.confirmStripePayment = functions.firestore
  .document('stripe_customers/{userId}/payments/{pushId}')
  .onUpdate(async (change, context) => {
    if (change.after.data().status === 'requires_confirmation') {
      const payment = await stripe.paymentIntents.confirm(
        change.after.data().id
      );
      change.after.ref.set(payment);
    }
  });

/**
 * When a user deletes their account, clean up after them
 */
exports.cleanupUser = functions.auth.user().onDelete(async (user) => {
  const dbRef = admin.firestore().collection('stripe_customers');
  const customer = (await dbRef.doc(user.uid).get()).data();
  await stripe.customers.del(customer.customer_id);
  // Delete the customers payments & payment methods in firestore.
  const snapshot = await dbRef
    .doc(user.uid)
    .collection('payment_methods')
    .get();
  snapshot.forEach((snap) => snap.ref.delete());
  await dbRef.doc(user.uid).delete();
  return;
});

/**
 * To keep on top of errors, we should raise a verbose error report with Stackdriver rather
 * than simply relying on console.error. This will calculate users affected + send you email
 * alerts, if you've opted into receiving them.
 */

// [START reporterror]

function reportError(err, context = {}) {
  // This is the name of the StackDriver log stream that will receive the log
  // entry. This name can be any valid log stream name, but must contain "err"
  // in order for the error to be picked up by StackDriver Error Reporting.
  const logName = 'errors';
  const log = logging.log(logName);

  // https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource
  const metadata = {
    resource: {
      type: 'cloud_function',
      labels: { function_name: process.env.FUNCTION_NAME },
    },
  };

  // https://cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorEvent
  const errorEvent = {
    message: err.stack,
    serviceContext: {
      service: process.env.FUNCTION_NAME,
      resourceType: 'cloud_function',
    },
    context: context,
  };

  // Write the error log entry
  return new Promise((resolve, reject) => {
    log.write(log.entry(metadata, errorEvent), (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}

// [END reporterror]

/**
 * Sanitize the error message for the user.
 */
function userFacingMessage(error) {
  return error.type
    ? error.message
    : 'An error occurred, developers have been alerted';
}
