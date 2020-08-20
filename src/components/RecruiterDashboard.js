import React, { Component } from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import data from '../data/geo.json';

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
        console.log(data);
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
                                <h2 className="section-title mb-2">43,167 Job Listed</h2>
                            </div>
                        </div>

                        <ul className="job-listings mb-5">
                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                                <Link to="/Jobdetail"></Link>
                                <div className="job-listing-logo">
                                    <img src="images/job_logo_1.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                </div>

                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>Product Designer</h2>
                                        <strong>Adidas</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> New York, New York
              </div>
                                    <div className="job-listing-meta">
                                        <span className="badge badge-danger">Part Time</span>
                                    </div>
                                </div>

                            </li>
                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                                <Link to="/"></Link>
                                <div className="job-listing-logo">
                                    <img src="images/job_logo_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                </div>

                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>Digital Marketing Director</h2>
                                        <strong>Sprint</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> Overland Park, Kansas
              </div>
                                    <div className="job-listing-meta">
                                        <span className="badge badge-success">Full Time</span>
                                    </div>
                                </div>
                            </li>

                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <Link to="/"></Link>
                                <div className="job-listing-logo">
                                    <img src="images/job_logo_3.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                </div>

                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>Back-end Engineer (Python)</h2>
                                        <strong>Amazon</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> Overland Park, Kansas
              </div>
                                    <div className="job-listing-meta">
                                        <span className="badge badge-success">Full Time</span>
                                    </div>
                                </div>
                            </li>

                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <Link to="/"></Link>
                                <div className="job-listing-logo">
                                    <img src="images/job_logo_4.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                </div>

                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>Senior Art Director</h2>
                                        <strong>Microsoft</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> Anywhere
              </div>
                                    <div className="job-listing-meta">
                                        <span className="badge badge-success">Full Time</span>
                                    </div>
                                </div>
                            </li>

                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <Link to="/"></Link>
                                <div className="job-listing-logo">
                                    <img src="images/job_logo_5.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                </div>

                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>Product Designer</h2>
                                        <strong>Puma</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> San Mateo, CA
              </div>
                                    <div className="job-listing-meta">
                                        <span className="badge badge-success">Full Time</span>
                                    </div>
                                </div>
                            </li>
                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <Link to="/"></Link>
                                <div className="job-listing-logo">
                                    <img src="images/job_logo_1.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                </div>

                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>Product Designer</h2>
                                        <strong>Adidas</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> New York, New York
              </div>
                                    <div className="job-listing-meta">
                                        <span className="badge badge-danger">Part Time</span>
                                    </div>
                                </div>

                            </li>
                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <Link to="/"></Link>
                                <div className="job-listing-logo">
                                    <img src="images/job_logo_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                </div>

                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>Digital Marketing Director</h2>
                                        <strong>Sprint</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> Overland Park, Kansas
              </div>
                                    <div className="job-listing-meta">
                                        <span className="badge badge-success">Full Time</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="row pagination-wrap">
                            <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                                <span>Showing 1-7 Of 43,167 Jobs</span>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <div className="custom-pagination ml-auto">
                                    <Link to="/" className="prev">Prev</Link>
                                    <div className="d-inline-block">
                                        <Link to="/" className="active">1</Link>
                                        <Link to="/">2</Link>
                                        <Link to="/">3</Link>
                                        <Link to="/">4</Link>
                                    </div>
                                    <Link to="/" className="next">Next</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default RecruiterDashboard