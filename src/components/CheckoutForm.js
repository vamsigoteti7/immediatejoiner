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
import { Link as RouterLink } from 'react-router-dom'

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
    
    }

    

    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe, elements } = this.props;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    

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
                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
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
                                    <CardActionArea component={RouterLink} to={{ pathname: '/Payment', query: tier  }}>
                                        <CardContent>
                                            <Typography className="btn px-4 btn-primary text-white" component="button">{tier.buttonText}</Typography>
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
                    
                </Container>

            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(CheckoutForm);