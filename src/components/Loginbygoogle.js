import React, { Component } from 'react'
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';
import hero_1 from '../images/hero_1.jpg';

export class Logintbygoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        // this.signup = this
        //   .signup
        //   .bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    signup(res) {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        sessionStorage.setItem("userData", JSON.stringify(googleresponse));
        this.props.history.push('/Dashboard')
        debugger;
        // axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
        //     .then((result) => {


        //     });
    };

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit() {
        console.log('clicked');
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            debugger;
            this.signup(response);
        }
        const { username, password, submitted, loggingIn } = this.state;
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
                            <div className="site-logo col-6"><a href="index.html">IMMEDIATE JOINER</a></div>

                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li><a href="index.html" className="nav-link">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
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
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                <h2 className="mb-4">Sign Up To Immediate Joiner</h2>
                                <form action="#" className="p-4 border rounded">
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="femailregister">Email</label>
                                            <input type="text" id="femailregister" className="form-control" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fpasswordregister">Password</label>
                                            <input type="password" id="fpasswordregister" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="row form-group mb-4">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fretypepassword">Re-Type Password</label>
                                            <input type="password" id="fretypepassword" className="form-control" placeholder="Re-type Password" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="Sign Up" className="btn px-4 btn-primary text-white" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-6">
                                <h2 className="mb-4">Log In To Immediate Joiner</h2>
                                <form action="#" className="p-4 border rounded">

                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="femail">Email</label>
                                            <input type="text" id="femail" className="form-control" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="row form-group mb-4">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fpassword">Password</label>
                                            <input type="password" id="fpassword" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="Log In"
                                                onClick={() => this.handleSubmit()}
                                                className="btn px-4 btn-primary text-white" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        )
    }
}

export default Logintbygoogle