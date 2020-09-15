import React from 'react';
import ReactDOM from 'react-dom';
import { auth, generateUserDocument } from '../../firebase/index';
import firebase from "firebase/app";
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { ArrowRightAlt } from '@material-ui/icons';

class MembershipCheckout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentuserid: '',
            clientSecret: []
        };
        this.paymentamount();
        //this.startDataListeners(this.props.userid.user);
    }

    paymentamount = async () => {
        await firebase
            .firestore()
            .collection('stripe_customers')
            .doc(this.props.userid.user.uid)
            .collection('payment_amount')
            .add({
                amount: 100,
                currency: "INR",
                description: 'Software Services'
            });
    }

    startDataListeners(currentUser) {
        /**
         * Get all payment methods for the logged in customer
         */
        if (currentUser !== null) {
            firebase
                .firestore()
                .collection('stripe_customers')
                .doc(currentUser.uid)
                .onSnapshot((snapshot) => {
                    snapshot.forEach((doc) => {
                        const payment = doc.data();

                        if (payment.payment != null) {
                            this.setState({ clientSecret: payment.payment });
                        }
                    });
                });

            /**
             * Get all payments for the logged in customer
             */
            // firebase
            //     .firestore()
            //     .collection('stripe_customers')
            //     .doc(currentUser.uid)
            //     .collection('payments')
            //     .onSnapshot((snapshot) => {
            //         snapshot.forEach((doc) => {
            //             const payment = doc.data();

            //             // let liElement = document.getElementById(`payment-${doc.id}`);
            //             // if (!liElement) {
            //             //     liElement = document.createElement('li');
            //             //     liElement.id = `payment-${doc.id}`;
            //             // }

            //             // let content = '';
            //             // if (
            //             //     payment.status === 'new' ||
            //             //     payment.status === 'requires_confirmation'
            //             // ) {
            //             //     content = `Creating Payment for ${this.formatAmount(
            //             //         payment.amount,
            //             //         payment.currency
            //             //     )}`;
            //             // } else if (payment.status === 'succeeded') {
            //             //     const card = payment.charges.data[0].payment_method_details.card;
            //             //     content = `✅ Payment for ${this.formatAmount(
            //             //         payment.amount,
            //             //         payment.currency
            //             //     )} on ${card.brand} card •••• ${card.last4}.`;
            //             // } else if (payment.status === 'requires_action') {
            //             //     content = `🚨 Payment for ${this.formatAmount(
            //             //         payment.amount,
            //             //         payment.currency
            //             //     )} ${payment.status}`;
            //             //     this.handleCardAction(payment, doc.id, currentUser);
            //             // } else {
            //             //     content = `⚠️ Payment for ${this.formatAmount(
            //             //         payment.amount,
            //             //         payment.currency
            //             //     )} ${payment.status}`;
            //             // }
            //             // liElement.innerText = content;
            //             // document.querySelector('#payments-list').appendChild(liElement);
            //         });
            //     });
        }
    }

    /**
   * Helper functions
   */

    // Format amount for diplay in the UI
    formatAmount = (amount, currency) => {
        amount = this.zeroDecimalCurrency(amount, currency)
            ? amount
            : (amount / 100).toFixed(2);
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
        }).format(amount);
    }

    // Format amount for Stripe
    formatAmountForStripe = (amount, currency) => {
        return this.zeroDecimalCurrency(amount, currency)
            ? amount
            : Math.round(amount * 100);
    }

    // Check if we have a zero decimal currency
    // https://stripe.com/docs/currencies#zero-decimal
    zeroDecimalCurrency = (amount, currency) => {
        let numberFormat = new Intl.NumberFormat(['en-US'], {
            style: 'currency',
            currency: currency,
            currencyDisplay: 'symbol',
        });
        const parts = numberFormat.formatToParts(amount);
        let zeroDecimalCurrency = true;
        for (let part of parts) {
            if (part.type === 'decimal') {
                zeroDecimalCurrency = false;
            }
        }
        return zeroDecimalCurrency;
    }

    // Handle card actions like 3D Secure
    handleCardAction = async (payment, docId, currentUser) => {
        const { stripe, elements } = this.props;
        const { error, paymentIntent } = await stripe.handleCardAction(
            payment.client_secret
        );
        if (error) {
            alert(error.message);
            payment = error.payment_intent;
        } else if (paymentIntent) {
            payment = paymentIntent;
        }

        await firebase
            .firestore()
            .collection('stripe_customers')
            .doc(currentUser.uid)
            .collection('payments')
            .doc(docId)
            .set(payment, { merge: true });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe, elements } = this.props;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    newcardform = async () => {
        const { stripe, elements } = this.props;

        const customer = await firebase
            .firestore()
            .collection('stripe_customers')
            .doc(this.props.userid.user.uid)
            .get()
        // try {
        const payment = customer.data().payment;

        try {
            const payload = await stripe.confirmCardPayment(payment, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'Goteti Vamsi Krishna',
                    },
                },
            });

            if (payload.error) {
                // setError(`Payment failed: ${payload.error.message}`);
                // setProcessing(false);
                console.log("[error]", payload.error);
            } else {
                // setError(null);
                // setSucceeded(true);
                // setProcessing(false);
                // setMetadata(payload.paymentIntent);
                console.log("[PaymentIntent]", payload.paymentIntent);
            }
        } catch (error) {
            console.log(error);
        }


        //     const { setupIntent, error } = await stripe.confirmCardSetup(
        //         this.props.userid.customerData.setup_secret,
        //         {
        //             payment_method: {
        //                 card: elements.getElement(CardElement),
        //                 billing_details: {
        //                     name: 'vamsi krishna goteti',
        //                 },
        //             },
        //         }
        //     );

        //     if (error) {

        //         return;
        //     }



        // } catch (error) {
        //     alert(error);
        // }
    }

    paymentForm = async () => {
        const data = {
            payment_method: 'pm_1HQH9nFTZGo3gXDdRWYiLO1Y',
            currency: 'INR',
            amount: this.formatAmountForStripe(100, 'INR'),
            status: 'new',
        };

        await firebase
            .firestore()
            .collection('stripe_customers')
            .doc(this.props.userid.user.uid)
            .collection('payments')
            .add(data);
    }

    render() {
        const { stripe } = this.props;
        const user = this.props.userid.user;
        const { photoURL, displayName, email } = user;
        return (
            <div>
                <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
                    <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
                        <div
                            style={{
                                background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
                                backgroundSize: "cover",
                                height: "200px",
                                width: "200px"
                            }}
                            className="border border-blue-300"
                        ></div>
                        <div className="md:pl-4">
                            <h2 className="text-2xl font-semibold">{displayName}</h2>
                            <h3 className="italic">{email}</h3>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-red-600 mt-4 text-white" onClick={() => { auth.signOut() }}>Sign out</button>
                </div>

                <details id="add-new-card">
                    <summary>Add new</summary>
                    <p>
                        Use any of the
            <a href="https://stripe.com/docs/testing#international-cards"
                        >Stripe test cards</a
                        >
            for this demo!
          </p>

                    <label>
                        Cardholder name
              <input type="text" name="name" value={this.state.cardholderName} required />
                    </label>
                    <fieldset>
                        <CardElement />
                    </fieldset>
                    <div id="error-message" role="alert"></div>
                    <button onClick={this.newcardform}>Save Card</button>

                </details>


                <div>
                    <label>
                        Card:
              <select name="payment-method" required></select>
                    </label>
                </div>
                <div>
                    <label>
                        Amount:
              <input
                            name="amount"
                            type="number"
                            min="1"
                            max="99999999"
                            value="100"
                            required
                        />
                    </label>
                    <label>
                        Currency:
              <select name="currency">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="jpy">JPY</option>
                        </select>
                    </label>
                </div>
                <button onClick={this.paymentForm}>Charge selected card</button>

            </div>
        );
    }
}

class Membership extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentuserid: ''
        };
    }

    render() {
        const stripePromise = loadStripe('pk_live_51HL4l2FTZGo3gXDdd6Cqg134r9FVGbhI0hOTQlbSfcs1b6LBOEw2tORB7PTXLgvmTvx0IE6LwRXzaTXCrowTaUF900H6UqqfZ0');
        const userid = this.props.userid
        return (
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ stripe, elements }) => (
                        <MembershipCheckout userid={userid} stripe={stripe} elements={elements} />
                    )}
                </ElementsConsumer>
            </Elements>
        );
    }

}

export default Membership;
