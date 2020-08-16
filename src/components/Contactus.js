import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';

class Contactus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                message: '',
                description: '',
                useremailid: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
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
                            <div className="site-logo col-6"><Link to="/">IMMEDIATE JOINER</Link></div>

                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li><Link to="/" className="nav-link active">Home</Link></li>
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

                <section class="site-section" id="next-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <form action="#" class="">

                                    <div class="row form-group">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <label class="text-black" for="fname">First Name</label>
                                            <input type="text" name="firstname" value={this.state.firstName} onChange={this.handleChange} class="form-control" />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="text-black" for="lname">Last Name</label>
                                            <input type="text" id="lname" class="form-control" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label class="text-black" for="email">Email</label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">

                                        <div class="col-md-12">
                                            <label class="text-black" for="subject">Subject</label>
                                            <input type="subject" id="subject" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input onClick={this.handleSubmit} value="Send Message" class="btn btn-primary btn-md text-white" />
                                        </div>
                                    </div>


                                </form>
                            </div>
                            <div class="col-lg-5 ml-auto">
                                <div class="p-4 mb-3 bg-white">
                                    <p class="mb-0 font-weight-bold">Address</p>
                                    <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                                    <p class="mb-0 font-weight-bold">Phone</p>
                                    <p class="mb-4"><a href="#">+1 232 3235 324</a></p>

                                    <p class="mb-0 font-weight-bold">Email Address</p>
                                    <p class="mb-0"><a href="#">youremail@domain.com</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >);
    }
}

export default Contactus;
