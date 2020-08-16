import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';

export class Employeedashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            reenterpassword: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin = () => {
        // const userData = {
        //     username: this.state.email,
        //     password: this.state.password
        // };
        // axios.post('/imjoiners', userData)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        this.props.history.push('/Empdashboard');
    }

    handleSignUp = () => {
        // const registerData = {
        //     firstname: "fda",
        //     username: this.state.email,
        //     usertype: "candiate",
        //     password: "12345"
        // };
        // axios.post('/impostRegisterus', registerData)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        this.props.history.push('/RecruiterDashboard');
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

                <section class=" py-3 site-section mb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <a href="#" class="btn btn-md btn-outline-primary border-width-2 d-block">Previous Project</a>
                            </div>
                            <div class="col-md-4 text-center">
                                <a href="#" class="btn btn-md btn-primary border-width-2 d-block">All Projects</a>
                            </div>
                            <div class="col-md-4 text-center">
                                <a href="#" class="btn btn-md btn-outline-primary border-width-2 d-block">Next Project</a>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div >
        )
    }
}

export default Employeedashboard