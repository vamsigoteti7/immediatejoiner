import React, { Component } from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import axios from '../axios-immediatejoiner';
import Select from 'react-select';
import { auth } from '../firebase/index';

export class EmployeeDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobposts: [],
            selectedindustry: '',
            selectedcity: '',
            nextdocid: '',
            previousdocid: '',
            firstdocid: '',
            industries: [
            ],
            cities: [
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    getAllIndustries = () => {
        axios.get('/imgetindustries')
            .then(response => {
                let industriesApi = response.data.map(data => {
                    return { value: data.industryname, id: data.industryid, label: data.industryname };
                });
                this.setState({
                    industries: industriesApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getCityByCountryId = () => {
        const countryData = {
            countryid: 2
        };
        axios.post('/imgetcitybyid', countryData)
            .then(response => {
                let cityApi = response.data.map(data => {
                    return { value: data.city, id: data.countryid, label: data.city };
                });
                this.setState({ selectedcity: '' });
                this.setState({
                    cities: cityApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        //this.getJobpostsByRecruiterId();
        this.getCityByCountryId();
        this.getAllIndustries();
    }

    handlePrevious = () => {
        this.getJobpostsByDocId(this.state.previousdocid);
    }

    handleNext = () => {
        if (this.state.jobposts.length > 0) {
            var jobpostsLength = this.state.jobposts.length;
            var lstelement = this.state.jobposts[jobpostsLength - 1];
            var frstelement = this.state.jobposts[0];
            this.setState({ previousdocid: frstelement.jobpostid });
            this.setState({ nextdocid: lstelement.jobpostid });
            if (this.state.firstdocid === '') {
                this.setState({ firstdocid: frstelement.jobpostid });
            }
            this.getJobpostsByDocId(lstelement.jobpostid);
        }
    }

    getJobpostsByDocId = (docid) => {
        var logindata = localStorage.getItem('LoginData');
        const recruiterData = {
            email: logindata,
            docid: docid
        };
        axios.post('/imjobpostsByStartAfter', recruiterData)
            .then(response => {
                let jobpostsApi = response.data.jp.map(data => {
                    return {
                        email: data.email,
                        companyname: data.companyname,
                        companylogourl: data.companylogourl,
                        city: data.city,
                        jobtitle: data.jobtitle,
                        jobtype: data.jobtype,
                        jobpostid: data.jobpostid
                    }
                });
                this.setState({
                    jobposts: jobpostsApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getJobpostsByRecruiterId = () => {
        var logindata = localStorage.getItem('LoginData');
        const recruiterData = {
            email: logindata
        };
        axios.post('/imjobpostsByDocid', recruiterData)
            .then(response => {
                let jobpostsApi = response.data.jp.map(data => {
                    return {
                        email: data.email,
                        companyname: data.companyname,
                        companylogourl: data.companylogourl,
                        city: data.city,
                        jobtitle: data.jobtitle,
                        jobtype: data.jobtype,
                        jobpostid: data.jobpostid
                    }
                });
                this.setState({
                    jobposts: jobpostsApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getJobsearch = () => {

        const recruiterData = {
            industry: this.state.selectedindustry.value,
            city: this.state.selectedcity.value
        };
        axios.post('/imjobsearch', recruiterData)
            .then(response => {
                let jobpostsApi = response.data.jp.map(data => {
                    return {
                        email: data.email,
                        companyname: data.companyname,
                        companylogourl: data.companylogourl,
                        city: data.city,
                        jobtitle: data.jobtitle,
                        jobtype: data.jobtype,
                        jobpostid: data.jobpostid
                    }
                });
                this.setState({
                    jobposts: jobpostsApi
                });
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
                                    <li><Link to="/" className="nav-link active js-menu-toggle">Home</Link></li>
                                    <li><Link className="js-menu-toggle" to="/Empdashboard">Dashboard</Link></li>
                                    <li><Link className="js-menu-toggle" to="/EmpDetails">MyProfile</Link></li>
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
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">

                                <div className="row mb-5">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <input type="text" className="form-control form-control-lg" placeholder="Job title, Company..." />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <Select className="selectpicker border rounded" id="job-city" data-style="btn-black" data-width="100%" data-live-search="true" title="Select City"
                                            onChange={e =>
                                                this.setState({
                                                    selectedcity: e
                                                })
                                            }
                                            options={this.state.cities}
                                            value={this.state.selectedcity}>
                                            {this.state.cities.map(city => (
                                                <option
                                                    key={city.value}
                                                    value={city.value}
                                                >
                                                    {city.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <Select className="selectpicker border rounded" id="industries" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Department"
                                            onChange={e =>
                                                this.setState({
                                                    selectedindustry: e
                                                })
                                            }
                                            options={this.state.industries}
                                            value={this.state.selectedindustry}>
                                            {this.state.industries.map(industry => (
                                                <option
                                                    key={industry.value}
                                                    value={industry.value}
                                                >
                                                    {industry.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <button onClick={this.getJobsearch} className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2"></span>Search Job</button>
                                    </div>
                                </div>

                                <ul className="job-listings mb-5">
                                    {this.state.jobposts.map(function (tier, i) {
                                        if (tier.email !== '') {
                                            return (
                                                <li key={i} className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                                                    <Link to={{ pathname: '/Jobdetail', query: tier.jobpostid }}></Link>
                                                    <div className="job-listing-logo">
                                                        <img src={tier.companylogourl} alt="Free Website Template by Free-Template.co" className="img-fluid" />
                                                    </div>

                                                    <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                                        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                                            <h2>{tier.jobtitle}</h2>
                                                            <strong>{tier.companyname}</strong>
                                                        </div>
                                                        <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                                            <span className="icon-room"></span> {tier.city}
                                                        </div>
                                                        <div className="job-listing-meta">
                                                            <span className="badge badge-success">{tier.jobtype}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (<div><h1>No Job Posts Yet</h1></div>)
                                        }
                                    })}
                                </ul>
                                <div className="container">
                                    <div className="right-cta-menu text-right d-flex aligin-items-center col-11">
                                        <div className="ml-auto">
                                            <button onClick={this.handlePrevious} className="btn btn-primary border-width-20 mb-5 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Previous</button>
                                            <button onClick={this.handleNext} className="btn btn-primary border-width-20 mb-5 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Next</button>
                                        </div>
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
            </div>
        )
    }
}

export default EmployeeDashboard