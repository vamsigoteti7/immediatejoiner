import React from 'react';
import ReactDOM from 'react-dom';
import { auth, generateUserDocument } from '../firebase/index';
import firebase from "firebase/app";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import api from './api';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(0, 0, 0),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
});

class CheckoutForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentuserid: '',
            currency: '',
            amount: '',
            error: '',
            plandetail: ''
        };
        this.plandetailclick = this.plandetailclick.bind(this);
        this.startDataListeners(this.props.userid.user);
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
                .collection('payment_methods')
                .onSnapshot((snapshot) => {
                    snapshot.forEach(function (doc) {
                        const paymentMethod = doc.data();
                        if (!paymentMethod.card) {
                            return;
                        }

                        // const optionId = `card-${doc.id}`;
                        // let optionElement = document.getElementById(optionId);

                        // // Add a new option if one doesn't exist yet.
                        // if (!optionElement) {
                        //     optionElement = document.createElement('option');
                        //     optionElement.id = optionId;
                        //     document
                        //         .querySelector('select[name=payment-method]')
                        //         .appendChild(optionElement);
                        // }

                        // optionElement.value = paymentMethod.id;
                        // optionElement.text = `${paymentMethod.card.brand} •••• ${paymentMethod.card.last4} | Expires ${paymentMethod.card.exp_month}/${paymentMethod.card.exp_year}`;
                    });
                });

            /**
             * Get all payments for the logged in customer
             */
            firebase
                .firestore()
                .collection('stripe_customers')
                .doc(currentUser.uid)
                .collection('payments')
                .onSnapshot((snapshot) => {
                    snapshot.forEach((doc) => {
                        const payment = doc.data();

                        // let liElement = document.getElementById(`payment-${doc.id}`);
                        // if (!liElement) {
                        //     liElement = document.createElement('li');
                        //     liElement.id = `payment-${doc.id}`;
                        // }

                        // let content = '';
                        // if (
                        //     payment.status === 'new' ||
                        //     payment.status === 'requires_confirmation'
                        // ) {
                        //     content = `Creating Payment for ${this.formatAmount(
                        //         payment.amount,
                        //         payment.currency
                        //     )}`;
                        // } else if (payment.status === 'succeeded') {
                        //     const card = payment.charges.data[0].payment_method_details.card;
                        //     content = `✅ Payment for ${this.formatAmount(
                        //         payment.amount,
                        //         payment.currency
                        //     )} on ${card.brand} card •••• ${card.last4}.`;
                        // } else if (payment.status === 'requires_action') {
                        //     content = `🚨 Payment for ${this.formatAmount(
                        //         payment.amount,
                        //         payment.currency
                        //     )} ${payment.status}`;
                        //     this.handleCardAction(payment, doc.id, currentUser);
                        // } else {
                        //     content = `⚠️ Payment for ${this.formatAmount(
                        //         payment.amount,
                        //         payment.currency
                        //     )} ${payment.status}`;
                        // }
                        // liElement.innerText = content;
                        // document.querySelector('#payments-list').appendChild(liElement);
                    });
                });
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

        try {
            const { setupIntent, error } = await stripe.confirmCardSetup(
                this.props.userid.customerData.setup_secret,
                {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: 'vamsi krishna goteti',
                        },
                    },
                }
            );

            if (error) {

                return;
            }

            await firebase
                .firestore()
                .collection('stripe_customers')
                .doc(this.props.userid.user.uid)
                .collection('payment_methods')
                .add({ id: setupIntent.payment_method });

        } catch (error) {
            alert(error);
        }
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

    handleSubmit = () => {

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    plandetailclick = (ev) => {
        console.log(ev);
    }

    render() {
        const { stripe } = this.props;
        const user = this.props.userid.user;
        const { photoURL, displayName, email } = user;
        const tiers = [
            {
                title: 'Pro',
                price: '100',
                description: [
                    'Post One Job For 100 Rs',
                    'Have 30 days Access For One Posted Job'
                ],
                buttonText: 'Select 100 Rs Plan',
                buttonVariant: 'contained',
            },
            {
                title: 'Enterprise',
                price: '1000',
                description: [
                    'Post 15 Jobs For 1000 Rs',
                    'Have 30 days Access For One Posted Job'
                ],
                buttonText: 'Select 1000 Rs Plan',
                buttonVariant: 'contained',
            },
        ];


        const options = {
            style: {
                base: {
                    color: "#32325d",
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#aab7c4",
                    },
                },
                invalid: {
                    color: "#fa755a",
                    iconColor: "#fa755a",
                },
            },
        };



        const { classes } = this.props;
        return (
            <React.Fragment>
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Plans
                    </Typography>

                </Container>
                <Container maxWidth="md" align="center" component="main">
                    <Grid container spacing={5} align="center">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} onClick={this.plandetailclick(tier)} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                Rs{tier.price}
                                            </Typography>
                                        </div>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActionArea  href="https://google.com">
                                        <CardContent>
                                            <Typography>Click me!</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    {/* <CardActions>
                                        <div className="col-md-12">
                                            <input value={tier.buttonText} name="plandetails" onClick={this.plandetailclick(tier.buttonText)} className="btn px-4 btn-primary text-white" />
                                        </div>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <div className="row mt-5"></div>
                    <div className="checkout-form" alignitems="center" justifycontent="center" align="center">
                        <form onSubmit={this.handleSubmit} align="center">
                            <h1>
                                {this.state.currency.toLocaleUpperCase()}{" "}
                                {this.state.amount.toLocaleString(navigator.language, {
                                    minimumFractionDigits: 2,
                                })}{" "}
                            </h1>
                            <label>{this.state.displayName}</label>

                            <div className="sr-combo-inputs">
                                <div className="sr-combo-inputs-row">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name On The Card"
                                        autoComplete="cardholder"
                                        className="form-control"
                                    />
                                </div>

                                <div className="sr-combo-inputs-row">
                                    <CardElement
                                        className="sr-input sr-card-element"
                                        options={options}
                                    />
                                </div>
                            </div>

                            {this.state.error && <div className="message sr-field-error">{this.state.error}</div>}

                            <button
                                className="btn px-4 btn-primary text-white"
                            >Pay
                        </button>
                        </form>
                    </div>
                </Container>

            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(CheckoutForm);