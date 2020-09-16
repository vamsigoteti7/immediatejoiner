const { db, admin } = require('../util/admin');

exports.getMembershipPlansByType = (request, response) => {
	db
		.collection('IMMembershipPlans')
		.where('MemberType', '==', request.body.membertype)
		.get()
		.then((data) => {
			let plans = [];
			data.forEach((doc) => {
				plans.push({
					"data": doc.data()
				});
			});
			return response.json(plans);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

// 'use strict';
// const functions = require('firebase-functions');
// const { db } = require('../util/admin');
// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
// const stripe = require('stripe')(functions.config().stripe.secret, {
//     apiVersion: '2020-03-02',
//   });


// exports.MembershipPublickey = (request, response) => {
//     response.send({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY });
// };

// exports.MembershipProductDetails = (request, response) => {
//     let data = getProductDetails();
//     response.send(data);
// };

// exports.CreatePaymentIntent = async (request, response) => {
//     const body = request.body;
//     const productDetails = getProductDetails();

//     const options = {
//         ...body,
//         amount: productDetails.amount,
//         currency: productDetails.currency,
//     };

//     try {
//         const paymentIntent = await stripe.paymentIntents.create(options);
//         response.json(paymentIntent);
//     } catch (err) {
//         response.json(err);
//     }
// };

// exports.Membershipwebhook = async (request, response) => {
//     let data;
//     let eventType;
//     // Check if webhook signing is configured.
//     if (webhookSecret) {
//         // Retrieve the event by verifying the signature using the raw body and secret.
//         let event;
//         let signature = request.headers["stripe-signature"];

//         try {
//             event = stripe.webhooks.constructEvent(
//                 request.body,
//                 signature,
//                 webhookSecret
//             );
//         } catch (err) {
//             console.log(`⚠️ Webhook signature verification failed.`);
//             return response.sendStatus(400);
//         }
//         // Extract the object from the event.
//         data = event.data;
//         eventType = event.type;
//     } else {
//         // Webhook signing is recommended, but if the secret is not configured in `config.js`,
//         // retrieve the event data directly from the request body.
//         data = request.body.data;
//         eventType = request.body.type;
//     }

//     if (eventType === "payment_intent.succeeded") {
//         // Fulfill any orders, e-mail receipts, etc
//         console.log("💰 Payment received!");
//     }

//     if (eventType === "payment_intent.payment_failed") {
//         // Notify the customer that their order was not fulfilled
//         console.log("❌ Payment failed.");
//     }

//     response.sendStatus(200);
// };

// let getProductDetails = () => {
//     return { currency: "INR", amount: 1 };
// };