import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';

export class MembershipPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginemail: '',
            loginpassword: '',
            email: '',
            password: '',
            reenterpassword: '',
            IsRecruiter: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin = () => {
        const userData = {
            username: this.state.loginemail,
            password: this.state.loginpassword
        };
        axios.post('/imjoiners', userData)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/Empdashboard');
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSignUp = () => {
        const registerData = {
            firstname: "",
            username: this.state.email,
            usertype: this.state.IsRecruiter == "true" ? "Recruiter" : "Candiate",
            password: this.state.password
        };
        axios.post('/impostRegisterus', registerData)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/RecruiterDashboard');
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
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
                                </ul>
                            </nav>
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
                        <input></input>
                        <GooglePayButton
                            environment="TEST"
                            paymentRequest={{ ... }}
                            onLoadPaymentData={() => { }}
                        />
                    </div>
                </section >
            </div >
        )
    }
}

export default MembershipPage