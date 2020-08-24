import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import Select from 'react-select';

export class Postajob extends Component {
    constructor(props) {
        super(props);
        this.modules = {
            toolbar: [
                [{ 'font': [] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean']
            ]
        };

        this.formats = [
            'font',
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background'
        ];
        this.state = {
            recruiteremail: '',
            jobtitle: '',
            username: '',
            companyname: '',
            companylogo: '',
            gender: '',
            jobtypes: [{
                value: 'Full Time',
                label: 'Full Time',
            },
            {
                value: 'Part Time',
                label: 'Part Time',
            }
            ],
            selectedjobtype: '',
            jobid: '',
            jobposteddate: '',
            jobpostexpires: '',
            jobdescription: '',
            place: '',
            vacancies: '',
            recruiterlinkdinlink: '',
            recruiterphonenumber: '',
            recruiterwebsite: '',
            salary: '',
            tagline: '',
            comments: '',
            selectedOption: null,
            countries: [
            ],
            selectedcountry: '',
            selectedcity: '',
            selecteddepartment: '',
            industries: [
            ],
            selectedindustry: '',
            cities: [
            ],
            experience:[],
            selectedexperience:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.rteChange = this.rteChange.bind(this);
    }

    componentDidMount() {
        this.getAllCountrys();
        this.getAllIndustries();
        this.getAllExperiences();
    }

    rteChange = (content, delta, source, editor) => {
        console.log(editor.getHTML()); // HTML/rich text
        console.log(editor.getText()); // plain text
        console.log(editor.getLength()); // number of characters
    }

    getAllIndustries = () => {
        axios.get('/imgetindustries')
            .then(response => {
                let industriesApi = response.data.map(data => {
                    return { value: data.industryname, id: data.industryid, label: data.industryname };
                });
                this.setState({
                    industries: [
                        {
                            value: "",
                            label: "",
                            id: 0,
                        }
                    ].concat(industriesApi)
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getAllCountrys = () => {
        axios.get('/imgetcountrys')
            .then(response => {
                let countriesApi = response.data.map(data => {
                    return { value: data.name, id: data.countryid, label: data.name };
                });
                this.setState({
                    countries: [
                        {
                            value: "",
                            label: "",
                            id: 0,
                        }
                    ].concat(countriesApi)
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getAllExperiences = () => {
        axios.get('/imgetexperiences')
            .then(response => {
                let experiencesApi = response.data.map(data => {
                    return { value: data.name, id: data.experienceid, label: data.name };
                });
                this.setState({
                    experience: [
                        {
                            value: "",
                            label: "",
                            id: 0,
                        }
                    ].concat(experiencesApi)
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getCityByCountryId = () => {
        const countryData = {
            countryid: this.state.selectedcountry.id
        };
        axios.post('/imgetcitybyid', countryData)
            .then(response => {
                let cityApi = response.data.map(data => {
                    return { value: data.city, id: data.countryid, label: data.city };
                });
                this.setState({ selectedcity: '' });
                this.setState({
                    cities: [
                        {
                            value: "",
                            label: "",
                            id: 0,
                        }
                    ].concat(cityApi)
                });
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
                                    <Link to="/">Home</Link> <span className="mx-2 slash">/</span>
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
                                        <label htmlFor="company-website-tw d-block">Upload Featured Image</label> <br />
                                        <label className="btn btn-primary btn-md btn-file">
                                            Browse File<input type="file" hidden />
                                        </label>
                                        {/* <input value="Browse File" class="btn btn-primary btn-md btn-file" type="file"/> */}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" value={this.state.recruiteremail} className="form-control" id="email" placeholder="you@yourdomain.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-title">Job Title</label>
                                        <input type="text" value={this.state.jobtitle} className="form-control" id="job-title" placeholder="Product Designer" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="job-country">Country</label>
                                        <Select className="selectpicker border rounded" id="job-country" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Country"
                                            onChange={e => {
                                                this.setState({
                                                    selectedcountry: e
                                                }, () => { this.getCityByCountryId(); })
                                            }
                                            }
                                            options={this.state.countries}
                                            value={this.state.selectedcountry}>
                                            {this.state.countries.map(team => (
                                                <option
                                                    key={team.value}
                                                    value={team.value}
                                                >
                                                    {team.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="job-city">City</label>
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

                                    <div className="form-group">
                                        <label htmlFor="departments">Industries</label>
                                        <Select className="selectpicker border rounded" id="job-departments" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Department"
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

                                    <div className="form-group">
                                        <label htmlFor="experience">Experience</label>
                                        <Select className="selectpicker border rounded" id="experience" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Experience"
                                            onChange={e =>
                                                this.setState({
                                                    selectedexperience: e
                                                })
                                            }
                                            options={this.state.experience}
                                            value={this.state.selectedexperience}>
                                            {this.state.experience.map(exp => (
                                                <option
                                                    key={exp.value}
                                                    value={exp.value}
                                                >
                                                    {exp.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="job-type">Job Type</label>
                                        <Select className="selectpicker border rounded" id="job-type" data-style="btn-black" data-width="100%" data-live-search="true" title="Select JobType"
                                            onChange={e =>
                                                this.setState({
                                                    selectedjobtype: e
                                                })
                                            }
                                            options={this.state.jobtypes}
                                            value={this.state.selectedjobtype}>
                                            {this.state.jobtypes.map(city => (
                                                <option
                                                    key={city.value}
                                                    value={city.value}
                                                >
                                                    {city.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="job-description">Job Description</label>
                                        <ReactQuill theme="snow" modules={this.modules}
                                            formats={this.formats} onChange={this.rteChange}
                                        />
                                    </div>


                                    <h3 className="text-black my-5 border-bottom pb-2">Company Details</h3>
                                    <div className="form-group">
                                        <label htmlFor="company-name">Company Name</label>
                                        <input type="text" value={this.state.companyname} className="form-control" id="company-name" placeholder="e.g. New York" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-tagline">Tagline (Optional)</label>
                                        <input type="text" value={this.state.companytagline} className="form-control" id="company-tagline" placeholder="e.g. New York" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="job-description">Company Description (Optional)</label>
                                        <ReactQuill theme="snow" modules={this.modules}
                                            formats={this.formats} onChange={this.rteChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-website">Website (Optional)</label>
                                        <input type="text" value={this.state.recruiterwebsite} className="form-control" id="company-website" placeholder="https://" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-website-tw">Linkedin Username (Optional)</label>
                                        <input type="text" value={this.state.recruiterlinkdinlink} className="form-control" id="company-website-tw" placeholder="companyname" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-website-tw d-block">Upload Logo</label> <br />
                                        <label className="btn btn-primary btn-md btn-file">
                                            Browse File<input type="file" hidden />
                                        </label>
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