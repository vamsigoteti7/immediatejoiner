import React, { Component } from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import axios from '../axios-immediatejoiner';

export class RecruiterDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            reenterpassword: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.getJobpostsByRecruiterId();
    }

    getJobpostsByRecruiterId = () => {
        var logindata = localStorage.getItem('LoginData');
        const recruiterData = {
            email: logindata
        };
        axios.post('/imjobpostbyrecruiterid', recruiterData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

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
                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <Link to="/Postjob" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-add"></span>Post a Job</Link>
                                    <Link to="/" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</Link>
                                </div>
                                <Link to="/" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></Link>
                            </div>
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
                            <div className="col-md-7 text-center">
                                <h2 className="section-title mb-2">Posted Jobs</h2>
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
            </div>
        )
    }
}

export default RecruiterDashboard