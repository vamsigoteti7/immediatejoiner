import React from 'react';
import firebase from "firebase/app";
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import hero_1 from '../../images/hero_1.jpg';
import { auth } from '../../firebase/index';

class MembershipCheckout extends React.Component {

    constructor(props) {
        super(props);
        const loginTypeValue = localStorage.getItem('tabindex') ? Number(localStorage.getItem('tabindex')) : 0;
        const loginType = loginTypeValue === 0 ? 'Candiate' : 'Recruiter';
        this.state = {
            cardholdername: '',
            error: '',
            status: '',
            plan: this.props.plan,
            stripetransactions: [],
            membershiptype: loginType,
            documentId: '',
            payment: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.paymentamount();
    }

    paymentamount = async () => {
        await firebase
            .firestore()
            .collection('stripe_customers')
            .doc(this.props.userid.user.uid)
            .collection('stripe_transactions')
            .orderBy('createdDate', 'desc')
            .limit(1)
            .get()
            .then(response => {
                response.forEach(document => {
                    this.setState({ documentId: document.id });
                    this.startDataListeners();
                    firebase.firestore().collection('stripe_customers')
                        .doc(this.props.userid.user.uid)
                        .collection('stripe_transactions')
                        .doc(document.id)
                        .collection('payment_amount').add({
                            amount: this.state.plan.price,
                            currency: this.state.plan.currency,
                            description: 'Software Services',
                            createdDate: firebase.firestore.Timestamp.fromDate(new Date())
                        });
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    startDataListeners() {
        firebase.firestore().collection('stripe_customers')
            .doc(this.props.userid.user.uid)
            .collection('stripe_transactions')
            .doc(this.state.documentId)
            .collection('payment_amount')
            .orderBy('createdDate', 'desc')
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.data().payment !== undefined) {
                        this.setState({ payment: doc.data().payment });
                    }
                });
            });
    }


    newpayment = async (ev) => {
        ev.preventDefault();
        const { stripe, elements } = this.props;
        if (this.state.payment !== []) {
            try {
                const payment = this.state.payment.client_secret;
                const payload = await stripe.confirmCardPayment(payment, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: this.state.cardholdername,
                        },
                    },
                });

                if (payload.error) {
                    this.setState({ error: payload.error });
                    console.log("[error]", payload.error);
                } else {
                    firebase.firestore()
                        .collection('IMUserPayments').add({
                            userid: this.props.userid.user.uid,
                            payment: payload.paymentIntent,
                            createdDate: firebase.firestore.Timestamp.fromDate(new Date())
                        });

                    if (this.state.membershiptype === "Candiate") {
                        this.props.history.push('/EmpDetails');
                    }
                    else if (this.state.membershiptype === "Recruiter") {
                        this.props.history.push('/RecruiterDashboard');
                    }

                    this.props.history.push('/RecruiterDashboard');
                    console.log("[PaymentIntent]", payload.paymentIntent);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

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

        return (
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <header className="site-navbar mt-3">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="site-logo col-6"><Link to="/">Immediate Joiner</Link></div>

                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li><Link to="/" className="nav-link">Home</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li><Link to="/Contactus">Contact</Link></li>
                                    <li className="d-lg-none"><button onClick={() => { auth.signOut() }} className="btn btn-primary border-width-2 d-none d-lg-inline-block js-menu-toggle">Log Out</button></li>
                                </ul>
                            </nav>
                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <button onClick={() => { auth.signOut() }} className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</button>
                                </div>
                                <div to="/" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3">
                                    <span className="icon-menu h3 m-0 p-0 mt-2"></span>
                                </div>
                            </div>
                            {/* <SmartToaster
                                store={toast}
                                lightBackground={true}
                                position={"top_right"}
                            /> */}
                        </div>
                    </div>
                </header>
                <section className="section-hero overlay inner-page bg-image" style={{ backgroundImage: `url(${hero_1})` }} id="home-section">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="text-white font-weight-bold">Sign Up/Login</h1>
                                <div className="custom-breadcrumbs">
                                    <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                    <span className="text-white"><strong>Log In</strong></span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>
                <section className="site-section">
                    <div className="container">

                        <div className="row mb-5 justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 className="section-title mb-2">{this.state.plan.paymentdescription}</h2>
                                {this.state.error !== '' && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{this.state.error}</div>}
                                <form action="#" className="p-4 border rounded">
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <input autoComplete="on" value={this.state.cardholdername} type="text" name="cardholdername" onChange={this.handleChange} className="form-control" placeholder="Enter The Name On The Card" required />
                                            <CardElement className="sr-input sr-card-element"
                                                options={options} />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <button
                                                name="pay"
                                                onClick={this.newpayment}
                                                className="btn px-4 btn-primary text-white" >Pay
                                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="site-footer">

                    <a href="#top" className="smoothscroll scroll-top">
                        <span className="icon-keyboard_arrow_up"></span>
                    </a>

                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-6 col-md-3 mb-4 mb-md-0">
                                <h3>Search Trending</h3>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Web Design</Link></li>
                                    <li><Link to="/">Graphic Design</Link></li>
                                    <li><Link to="/">Web Developers</Link></li>
                                    <li><Link to="/">Python</Link></li>
                                    <li><Link to="/">HTML5</Link></li>
                                    <li><Link to="/">CSS3</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3 mb-4 mb-md-0">
                                <h3>Company</h3>
                                <ul className="list-unstyled">
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">Career</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Resources</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3 mb-4 mb-md-0">
                                <h3>Support</h3>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Support</Link></li>
                                    <li><Link to="/">Privacy</Link></li>
                                    <li><Link to="/">Terms of Service</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3 mb-4 mb-md-0">
                                <h3>Contact Us</h3>
                                <div className="footer-social">
                                    <Link to="/"><span className="icon-facebook"></span></Link>
                                    <Link to="/"><span className="icon-twitter"></span></Link>
                                    <Link to="/"><span className="icon-instagram"></span></Link>
                                    <Link to="/"><span className="icon-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-12">
                            </div>
                        </div>
                    </div>
                </footer>

            </div >
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
        const stripePromise = loadStripe('pk_test_51HL4l2FTZGo3gXDdM3fMEyMnJVuAP3ASpTzBR4EEFo9ZjLScOt5ObuWOdadfwJwUd6GXmqh0N4OYWCVFHMyYcMCv00z57Vbv5V');
        const userid = this.props.userid
        var plan = this.props.history.location.query;
        return (
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ stripe, elements }) => (
                        <MembershipCheckout userid={userid} plan={plan} stripe={stripe} elements={elements} />
                    )}
                </ElementsConsumer>
            </Elements>
        );
    }

}

export default Membership;
