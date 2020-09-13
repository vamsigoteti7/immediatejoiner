import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
// import { SmartToaster, toast } from 'react-smart-toaster';
import { auth, signInWithGoogle } from '../firebase/index';

export class ImmediateJoinerPasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailSent : false,
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    sendResetEmail = event => {
        event.preventDefault();
        auth
            .sendPasswordResetEmail(this.state.email)
            .then(() => {
                this.setState({emailSent : true});
                setTimeout(() => { this.setState({emailSent : false}); }, 3000);
            })
            .catch(() => {
                this.setState({error : 'Error resetting password'});
            });
    };

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
                                <h2 className="section-title mb-2">Reset your Password</h2>
                                {this.state.error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{this.state.error}</div>}
                                <form action="#" className="p-4 border rounded">

                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label htmlFor="loginemail">Email</label>
                                            <input autoComplete="on" value={this.state.loginemail} type="text" name="loginemail" onChange={this.handleChange} className="form-control" placeholder="Email address" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input value="Send Me A Reset Link"
                                                onChange={this.handleChange}
                                                name="IsLogIn"
                                                onClick={this.handleLogin}
                                                className="btn px-4 btn-primary text-white" />
                                        </div>
                                    </div>

                                </form>
                                <Link
                                    to="/Login"
                                    className="my-2 text-blue-700 hover:text-blue-800 text-center block"
                                >
                                    &larr; back to sign in page
        </Link>
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
        )
    }
}

export default ImmediateJoinerPasswordReset