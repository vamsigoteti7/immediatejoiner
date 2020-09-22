import React, { Component } from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import axios from '../axios-immediatejoiner';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { auth } from '../firebase/index';

export class Jobdetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            docid: this.props.history.location.query,
            jobpostdata: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        this.getjobdetailbyjobid();
    }

    jobapply = () => {
        var logindata = localStorage.getItem('LoginData');
        const jobData = {
            username: logindata,
            jobid: this.state.docid
        };
        axios.post('/imuserjobapplications', jobData)
            .then(response => {
                this.props.history.push('/Empdashboard');
            })
            .catch(error => {
                console.log(error);
            });
    }

    getjobdetailbyjobid() {
        const jobData = {
            docid: this.state.docid
        };
        axios.post('/imjobpostsbyid', jobData)
            .then(response => {
                let jobpostsApi = {
                    jobpostid: response.data.id,
                    email: response.data.email,
                    jobtitle: response.data.jobtitle,
                    country: response.data.country,
                    city: response.data.city,
                    industry: response.data.industry,
                    jobtype: response.data.jobtype,
                    skills: response.data.skills,
                    jobdescription: response.data.jobdescription,
                    companyname: response.data.companyname,
                    companydescription: response.data.companydescription,
                    companywebsite: response.data.companywebsite,
                    experiencerequired: response.data.experiencerequired,
                    recruiterimageurl: response.data.recruiterimageurl,
                    companylogourl: response.data.companylogourl,
                    createddate: response.data.createddate
                }
                this.setState({
                    jobpostdata: jobpostsApi
                });
            })
            .catch(error => {
                console.log(error);
            });
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
                                    <li className="d-lg-none"><button onClick={() => { auth.signOut() }} className="btn btn-primary border-width-2 d-none d-lg-inline-block js-menu-toggle">Log Out</button></li>
                                </ul>
                            </nav>
                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <button onClick={() => { auth.signOut() }} className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</button>
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
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div className="border p-2 d-inline-block mr-3 rounded">
                                        <img src={this.state.jobpostdata.companylogourl} height="100" width="100" alt="Image1" />
                                    </div>
                                    <div>
                                        <h2>{this.state.jobpostdata.jobtitle}</h2>
                                        <div>
                                            <span className="ml-0 mr-2 mb-2"><span className="icon-briefcase mr-2"></span>{this.state.jobpostdata.companyname}</span>
                                            <span className="m-2"><span className="icon-room mr-2"></span>{this.state.jobpostdata.city}</span>
                                            <span className="m-2"><span className="icon-clock-o mr-2"></span><span className="text-primary">{this.state.jobpostdata.jobtype}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <button hidden="true" className="btn btn-block btn-light btn-md"><span className="icon-heart-o mr-2 text-danger"></span>Save Job</button>
                                    </div>
                                    <div class="col-6">
                                        <button onClick={this.jobapply} className="btn btn-block btn-primary btn-md">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3"></span>Job Description</h3>
                                    <div>
                                        <ReactQuill
                                            value={this.state.jobpostdata.jobdescription}
                                            readOnly={true}
                                            theme={"bubble"}
                                        />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-book mr-3"></span>Experience Required</h3>
                                    <ul className="list-unstyled m-0 p-0">
                                        <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>{this.state.jobpostdata.experiencerequired}</span></li>
                                    </ul>
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