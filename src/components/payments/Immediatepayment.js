import React from 'react'
import firebase from "firebase/app";


class Immediatepayment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentuserid: ''
        };
    }

    addnewCardForm = () => {
        document
            .querySelector('#payment-method-form')
            .addEventListener('submit', async (event) => {
                event.preventDefault();
                if (!event.target.reportValidity()) {
                    return;
                }
                document
                    .querySelectorAll('button')
                    .forEach((button) => (button.disabled = true));

                const form = new FormData(event.target);
                const cardholderName = form.get('name');

                const { setupIntent, error } = await stripe.confirmCardSetup(
                    customerData.setup_secret,
                    {
                        payment_method: {
                            card: cardElement,
                            billing_details: {
                                name: cardholderName,
                            },
                        },
                    }
                );

                if (error) {
                    document.querySelector('#error-message').textContent = error.message;
                    document
                        .querySelectorAll('button')
                        .forEach((button) => (button.disabled = false));
                    return;
                }

                await firebase
                    .firestore()
                    .collection('stripe_customers')
                    .doc(currentUser.uid)
                    .collection('payment_methods')
                    .add({ id: setupIntent.payment_method });

                document.querySelector('#add-new-card').open = false;
                document
                    .querySelectorAll('button')
                    .forEach((button) => (button.disabled = false));
            });
    }

    createPaymentForm = () => {
        document
            .querySelector('#payment-form')
            .addEventListener('submit', async (event) => {
                event.preventDefault();
                document
                    .querySelectorAll('button')
                    .forEach((button) => (button.disabled = true));

                const form = new FormData(event.target);
                const amount = Number(form.get('amount'));
                const currency = form.get('currency');
                const data = {
                    payment_method: form.get('payment-method'),
                    currency,
                    amount: formatAmountForStripe(amount, currency),
                    status: 'new',
                };

                await firebase
                    .firestore()
                    .collection('stripe_customers')
                    .doc(currentUser.uid)
                    .collection('payments')
                    .add(data);

                document
                    .querySelectorAll('button')
                    .forEach((button) => (button.disabled = false));
            });
    }

    

    OnAuthStateChanged = () => {
        firebase
            .firestore()
            .collection('stripe_customers')
            .doc(this.state.currentuserid)
            .onSnapshot((snapshot) => {
                if (snapshot.data()) {
                    // customerData = snapshot.data();
                    this.startDataListeners();
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('content').style.display = 'block';
                } else {
                    console.warn(
                        `No Stripe customer found in Firestore for user: ${this.state.currentuserid}`
                    );
                }
            });
    }

    startDataListeners = () => {
        firebase
            .firestore()
            .collection('stripe_customers')
            .doc(this.state.currentuserid)
            .collection('payment_methods')
            .onSnapshot((snapshot) => {
                if (snapshot.empty) {
                    document.querySelector('#add-new-card').open = true;
                }
                snapshot.forEach(function (doc) {
                    const paymentMethod = doc.data();
                    if (!paymentMethod.card) {
                        return;
                    }

                    const optionId = `card-${doc.id}`;
                    let optionElement = document.getElementById(optionId);

                    // Add a new option if one doesn't exist yet.
                    if (!optionElement) {
                        optionElement = document.createElement('option');
                        optionElement.id = optionId;
                        document
                            .querySelector('select[name=payment-method]')
                            .appendChild(optionElement);
                    }

                    optionElement.value = paymentMethod.id;
                    optionElement.text = `${paymentMethod.card.brand} •••• ${paymentMethod.card.last4} | Expires ${paymentMethod.card.exp_month}/${paymentMethod.card.exp_year}`;
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Cloud Functions for Firebase with Stripe Payments</h1>
                <section id="firebaseui-auth-container"></section>
                <div id="loader">Loading &hellip;</div>
                <section id="content">
                    <button type="button" id="signout">
                        Sign out
      </button>
                    <div>
                        <h2>Payment Methods</h2>
                        <details id="add-new-card">
                            <summary>Add new</summary>
                            <p>
                                Use any of the
            <a href="https://stripe.com/docs/testing#international-cards"
                                >Stripe test cards</a
                                >
            for this demo!
          </p>
                            <form id="payment-method-form">
                                <label>
                                    Cardholder name
              <input type="text" name="name" required />
                                </label>
                                <fieldset>
                                    <div id="card-element"></div>
                                </fieldset>
                                <div id="error-message" role="alert"></div>
                                <button>Save Card</button>
                            </form>
                        </details>
                        <hr />
                        <form id="payment-form">
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
                            <button>Charge selected card</button>
                        </form>
                    </div>
                    <div>
                        <h2>Payments</h2>
                        <ul id="payments-list"></ul>
                    </div>
                </section>
                <hr />
                <footer>
                    <a
                        href="https://github.com/firebase/functions-samples/tree/master/stripe"
                    >
                        View source code
      </a>
                </footer>
            </div>
        );
    }
}

export default Immediatepayment;
