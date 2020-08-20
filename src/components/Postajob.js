import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';

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
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h2>Post A Job</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="/" className="btn btn-block btn-light btn-md"><span className="icon-open_in_new mr-2"></span>Preview</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" className="btn btn-block btn-primary btn-md">Save Job</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <form className="p-4 p-md-5 border rounded" method="post">
                                    <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>

                                    <div className="form-group">
                                        {/* <label for="company-website-tw d-block">Upload Featured Image</label> <br>
                                            <label class="btn btn-primary btn-md btn-file">
                                                Browse File<input type="file" hidden />
                                            </label> */}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="you@yourdomain.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-title">Job Title</label>
                                        <input type="text" className="form-control" id="job-title" placeholder="Product Designer" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-location">Location</label>
                                        <input type="text" className="form-control" id="job-location" placeholder="e.g. New York" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="job-region">Job Region</label>
                                        <select className="selectpicker border rounded" id="job-region" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Region">
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

                                    <div className="form-group">
                                        <label htmlFor="job-type">Job Type</label>
                                        <select className="selectpicker border rounded" id="job-type" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Job Type">
                                            <option>Part Time</option>
                                            <option>Full Time</option>
                                        </select>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="job-description">Job Description</label>
                                        <div className="editor" id="editor-1">
                                            <p>Write Job Description!</p>
                                        </div>
                                    </div>


                                    <h3 className="text-black my-5 border-bottom pb-2">Company Details</h3>
                                    <div className="form-group">
                                        <label htmlFor="company-name">Company Name</label>
                                        <input type="text" className="form-control" id="company-name" placeholder="e.g. New York" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-tagline">Tagline (Optional)</label>
                                        <input type="text" className="form-control" id="company-tagline" placeholder="e.g. New York" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="job-description">Company Description (Optional)</label>
                                        <div className="editor" id="editor-2">
                                            <p>Description</p>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-website">Website (Optional)</label>
                                        <input type="text" className="form-control" id="company-website" placeholder="https://" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-website-fb">Facebook Username (Optional)</label>
                                        <input type="text" className="form-control" id="company-website-fb" placeholder="companyname" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-website-tw">Twitter Username (Optional)</label>
                                        <input type="text" className="form-control" id="company-website-tw" placeholder="@companyname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company-website-tw">Linkedin Username (Optional)</label>
                                        <input type="text" className="form-control" id="company-website-tw" placeholder="companyname" />
                                    </div>

                                    <div className="form-group">
                                        {/* <label for="company-website-tw d-block">Upload Logo</label> <br>
                                                <label class="btn btn-primary btn-md btn-file">
                                                    Browse File<input type="file" hidden />
                                                </label> */}
                                    </div>

                                </form>
                            </div>


                        </div>
                        <div className="row align-items-center mb-5">

                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="/" className="btn btn-block btn-light btn-md"><span className="icon-open_in_new mr-2"></span>Preview</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" className="btn btn-block btn-primary btn-md">Save Job</Link>
                                    </div>
                                </div>
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

export default Postajob