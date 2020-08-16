import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';

export class Jobdetails extends Component {
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
                <section class="site-section">
                    <div class="container">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-8 mb-4 mb-lg-0">
                                <div class="d-flex align-items-center">
                                    <div class="border p-2 d-inline-block mr-3 rounded">
                                        <img src="images/job_logo_5.jpg" alt="Image" />
                                    </div>
                                    <div>
                                        <h2>Product Designer</h2>
                                        <div>
                                            <span class="ml-0 mr-2 mb-2"><span class="icon-briefcase mr-2"></span>Puma</span>
                                            <span class="m-2"><span class="icon-room mr-2"></span>New York City</span>
                                            <span class="m-2"><span class="icon-clock-o mr-2"></span><span class="text-primary">Full Time</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="row">
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save Job</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-primary btn-md">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="mb-5">
                                    <figure class="mb-5"><img src="images/job_single_img_1.jpg" alt="Image" class="img-fluid rounded" /></figure>
                                    <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="icon-align-left mr-3"></span>Job Description</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus.</p>
                                    <p>Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
                                </div>
                                <div class="mb-5">
                                    <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="icon-rocket mr-3"></span>Responsibilities</h3>
                                    <ul class="list-unstyled m-0 p-0">
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
                                    </ul>
                                </div>

                                <div class="mb-5">
                                    <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="icon-book mr-3"></span>Education + Experience</h3>
                                    <ul class="list-unstyled m-0 p-0">
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
                                    </ul>
                                </div>

                                <div class="mb-5">
                                    <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="icon-turned_in mr-3"></span>Other Benifits</h3>
                                    <ul class="list-unstyled m-0 p-0">
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                                        <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
                                    </ul>
                                </div>

                                <div class="row mb-5">
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save Job</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-primary btn-md">Apply Now</a>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-4">
                                <div class="bg-light p-3 border rounded mb-4">
                                    <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
                                    <ul class="list-unstyled pl-3 mb-0">
                                        <li class="mb-2"><strong class="text-black">Published on:</strong> April 14, 2019</li>
                                        <li class="mb-2"><strong class="text-black">Vacancy:</strong> 20</li>
                                        <li class="mb-2"><strong class="text-black">Employment Status:</strong> Full-time</li>
                                        <li class="mb-2"><strong class="text-black">Experience:</strong> 2 to 3 year(s)</li>
                                        <li class="mb-2"><strong class="text-black">Job Location:</strong> New ork City</li>
                                        <li class="mb-2"><strong class="text-black">Salary:</strong> $60k - $100k</li>
                                        <li class="mb-2"><strong class="text-black">Gender:</strong> Any</li>
                                        <li class="mb-2"><strong class="text-black">Application Deadline:</strong> April 28, 2019</li>
                                    </ul>
                                </div>

                                <div class="bg-light p-3 border rounded">
                                    <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Share</h3>
                                    <div class="px-3">
                                        <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-facebook"></span></a>
                                        <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-twitter"></span></a>
                                        <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-linkedin"></span></a>
                                        <a href="#" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-pinterest"></span></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div >
        )
    }
}

export default Jobdetails