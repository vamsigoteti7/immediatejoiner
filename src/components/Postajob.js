import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';

export class Postajob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            companyname: '',
            companylogo: '',
            experience: '',
            gender: '',
            jobtype: '',
            jobid: '',
            jobposteddate: '',
            jobpostexpires: '',
            jobdescription: '',
            place: '',
            vacancies: '',
            recruiteremail: '',
            recruiterlinkdinlink: '',
            recruiterphonenumber: '',
            recruiterwebsite: '',
            salary: '',
            tagline: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    getAllIndustries = () => {
        axios.post('/imgetindustries')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    handlejobpost = () => {
        const registerData = {
            username: this.state.username,
            companyname: this.state.companyname,
            companylogo: this.state.companylogo,
            experience: this.state.experience,
            gender: this.state.gender,
            jobtype: this.state.jobtype,
            jobid: this.state.jobid,
            jobposteddate: this.state.jobposteddate,
            jobpostexpires: this.state.jobpostexpires,
            jobdescription: this.state.jobdescription,
            place: this.state.place,
            vacancies: this.state.vacancies,
            recruiteremail: this.state.recruiteremail,
            recruiterlinkdinlink: this.state.recruiterlinkdinlink,
            recruiterphonenumber: this.state.recruiterphonenumber,
            recruiterwebsite: this.state.recruiterwebsite,
            salary: this.state.salary,
            tagline: this.state.tagline
        };
        axios.post('/impostjob', registerData)
            .then(response => {
                console.log(response.data);
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
                <section class="site-section">
                    <div class="container">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-8 mb-4 mb-lg-0">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <h2>Post A Job</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="row">
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-open_in_new mr-2"></span>Preview</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-primary btn-md">Save Job</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-lg-12">
                                <form class="p-4 p-md-5 border rounded" method="post">
                                    <h3 class="text-black mb-5 border-bottom pb-2">Job Details</h3>

                                    <div class="form-group">
                                        {/* <label for="company-website-tw d-block">Upload Featured Image</label> <br>
                                            <label class="btn btn-primary btn-md btn-file">
                                                Browse File<input type="file" hidden />
                                            </label> */}
                                    </div>

                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" class="form-control" id="email" placeholder="you@yourdomain.com" />
                                    </div>
                                    <div class="form-group">
                                        <label for="job-title">Job Title</label>
                                        <input type="text" class="form-control" id="job-title" placeholder="Product Designer" />
                                    </div>
                                    <div class="form-group">
                                        <label for="job-location">Location</label>
                                        <input type="text" class="form-control" id="job-location" placeholder="e.g. New York" />
                                    </div>

                                    <div class="form-group">
                                        <label for="job-region">Job Region</label>
                                        <select class="selectpicker border rounded" id="job-region" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Region">
                                            <option>Anywhere</option>
                                            <option>San Francisco</option>
                                            <option>Palo Alto</option>
                                            <option>New York</option>
                                            <option>Manhattan</option>
                                            <option>Ontario</option>
                                            <option>Toronto</option>
                                            <option>Kansas</option>
                                            <option>Mountain View</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="job-type">Job Type</label>
                                        <select class="selectpicker border rounded" id="job-type" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Job Type">
                                            <option>Part Time</option>
                                            <option>Full Time</option>
                                        </select>
                                    </div>


                                    <div class="form-group">
                                        <label for="job-description">Job Description</label>
                                        <div class="editor" id="editor-1">
                                            <p>Write Job Description!</p>
                                        </div>
                                    </div>


                                    <h3 class="text-black my-5 border-bottom pb-2">Company Details</h3>
                                    <div class="form-group">
                                        <label for="company-name">Company Name</label>
                                        <input type="text" class="form-control" id="company-name" placeholder="e.g. New York" />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-tagline">Tagline (Optional)</label>
                                        <input type="text" class="form-control" id="company-tagline" placeholder="e.g. New York" />
                                    </div>

                                    <div class="form-group">
                                        <label for="job-description">Company Description (Optional)</label>
                                        <div class="editor" id="editor-2">
                                            <p>Description</p>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="company-website">Website (Optional)</label>
                                        <input type="text" class="form-control" id="company-website" placeholder="https://" />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-website-fb">Facebook Username (Optional)</label>
                                        <input type="text" class="form-control" id="company-website-fb" placeholder="companyname" />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-website-tw">Twitter Username (Optional)</label>
                                        <input type="text" class="form-control" id="company-website-tw" placeholder="@companyname" />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-website-tw">Linkedin Username (Optional)</label>
                                        <input type="text" class="form-control" id="company-website-tw" placeholder="companyname" />
                                    </div>

                                    <div class="form-group">
                                        {/* <label for="company-website-tw d-block">Upload Logo</label> <br>
                                                <label class="btn btn-primary btn-md btn-file">
                                                    Browse File<input type="file" hidden />
                                                </label> */}
                                    </div>

                                </form>
                            </div>


                        </div>
                        <div class="row align-items-center mb-5">

                            <div class="col-lg-4 ml-auto">
                                <div class="row">
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-light btn-md"><span class="icon-open_in_new mr-2"></span>Preview</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="#" class="btn btn-block btn-primary btn-md">Save Job</a>
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

export default Postajob