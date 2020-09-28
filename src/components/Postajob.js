import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import Select from 'react-select';
import { storage } from '../firebase';
import { auth } from '../firebase/index';
import { toast } from "react-toastify";
import citydata from '../immediatedata/indiacitydata.json';
import experiencedata from '../immediatedata/experience.json';
import industrydata from '../immediatedata/industries.json';

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
            jobtitle: '',
            selectedcountry: '',
            selectedcity: '',
            selectedindustry: '',
            selectedjobtype: '',
            skills: '',
            jobdescription: '',
            companyname: '',
            tagline: '',
            companydescription: '',
            companywebsite: '',
            selectedexperience: '',
            recruiterpic: '',
            companylogo: '',
            jobtypes: [{
                value: 'Full Time',
                label: 'Full Time',
            },
            {
                value: 'Part Time',
                label: 'Part Time',
            }
            ],
            jobid: '',
            jobposteddate: '',
            jobpostexpires: '',
            countries: [
            ],
            selecteddepartment: '',
            industries: [
            ],
            cities: [
            ],
            experience: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.companydescriptionChange = this.companydescriptionChange.bind(this);
        this.jobdescriptionChange = this.jobdescriptionChange.bind(this);
        this.handleCompanyPicUpload = this.handleCompanyPicUpload.bind(this);
        this.handlejobpost = this.handlejobpost.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getAllCountrys();
        this.getAllIndustries();
        this.getAllExperiences();
    }


    jobdescriptionChange = (content, delta, source, editor) => {
        this.setState({
            jobdescription: editor.getHTML()
        });
    }

    companydescriptionChange = (content, delta, source, editor) => {
        this.setState({
            companydescription: editor.getHTML()
        });
    }

    getAllIndustries = () => {
        let industriesApi = industrydata.map(data => {
            return { value: data.industryname, id: data.industryid, label: data.industryname };
        });
        this.setState({
            industries: industriesApi
        });
    };

    getAllCountrys = () => {
        this.setState({
            countries: [{ value: "India", id: 2, label: "India" }]
        });
    };

    getAllExperiences = () => {
        let experiencesApi = experiencedata.map(data => {
            return { value: data.name, id: data.experiencedocid, label: data.name };
        });
        this.setState({
            experience: experiencesApi
        });
    };

    getCityByCountryId = () => {
        let cityApi = citydata.map(data => {
            return { value: data.city, id: data.countryid, label: data.city };
        });
        this.setState({ selectedcity: '' });
        this.setState({
            cities: cityApi
        });
    };

    handlejobpost = () => {
        const registerData = {
            email: this.props.userid.user.username,
            jobtitle: this.state.jobtitle,
            country: this.state.selectedcountry.value,
            city: this.state.selectedcity.value,
            industry: this.state.selectedindustry.value,
            jobtype: this.state.selectedjobtype.value,
            skills: this.state.skills,
            jobdescription: this.state.jobdescription,
            companyname: this.state.companyname,
            companydescription: this.state.companydescription,
            companywebsite: this.state.companywebsite,
            experiencerequired: this.state.selectedexperience.value,
            companylogourl: this.state.companylogourl
        };
        axios.post('/impostjob', registerData)
            .then(response => {
                toast.success("Job Posted Successfully");
                this.props.history.push('/RecruiterDashboard');
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCompanyChange = (e) => {
        if (e.target.files[0]) {
            let file_size = e.target.files[0].size / 1000000;
            if (file_size < 0.03) {
                this.setState({ companylogo: e.target.files[0] }, () => { this.handleCompanyPicUpload(); });
            }
            else {
                toast.success("File Size Cannot be more than 30 KB");
            }
        }
    };

    handleCompanyPicUpload = () => {
        const fileextension = this.state.companylogo.name.split('.');
        var extension = null;
        if (fileextension.length > 0) {
            extension = fileextension[fileextension.length - 1];
        }
        const uploadTask = storage.ref(`companylogos/${this.props.userid.user.username + '.' + extension}`).put(this.state.companylogo);
        uploadTask.on(
            "state_changed",
            snapshot => {
                this.setState({
                    companylogoprogress: Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                });
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("companylogos")
                    .child(this.props.userid.user.username + '.' + extension)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ companylogourl: url });
                    });
            }
        );
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
                            <div className="site-logo col-6"><Link className="js-menu-toggle" to="/">Immediate Joiner</Link></div>

                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li><Link className="nav-link active js-menu-toggle" to="/">Home</Link></li>
                                    <li><Link className="js-menu-toggle" to="/RecruiterDashboard">Dashboard</Link></li>
                                    <li class="d-lg-none"><Link className="js-menu-toggle" to="/Postjob"><span class="mr-2">+</span> Post a Job</Link></li>
                                    <li className="d-lg-none"><Link onClick={() => { auth.signOut(); this.props.history.push('/'); }} className="js-menu-toggle" >Log Out</Link></li>
                                </ul>
                            </nav>

                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <Link to="/Postjob" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-add"></span>Post a Job</Link>
                                    <Link onClick={() => { auth.signOut(); this.props.history.push('/'); }} className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</Link>
                                </div>
                                <div to="/" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3">
                                    <span className="icon-menu h3 m-0 p-0 mt-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="section-hero overlay inner-page bg-image" style={{ backgroundImage: `url(${hero_1})` }} id="home-section">
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
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" onClick={this.handlejobpost} className="btn btn-block btn-primary btn-md">Save Job</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <form className="p-4 p-md-5 border rounded" method="post">
                                    <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>

                                    <div className="form-group">
                                        <label htmlFor="jobtitle">Job Title</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.jobtitle} className="form-control" name="jobtitle" placeholder="Product Designer" />
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
                                            {this.state.countries.map(country => (
                                                <option
                                                    key={country.value}
                                                    value={country.value}
                                                >
                                                    {country.value}
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
                                        <label htmlFor="industries">Industries</label>
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
                                            {this.state.jobtypes.map(job => (
                                                <option
                                                    key={job.value}
                                                    value={job.value}
                                                >
                                                    {job.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="skills">Skills</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.skills} className="form-control" name="skills" placeholder="Enter Skills" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="job-description">Job Description</label>
                                        <ReactQuill theme="snow" modules={this.modules}
                                            formats={this.formats} onChange={this.jobdescriptionChange}
                                        />
                                    </div>


                                    <h3 className="text-black my-5 border-bottom pb-2">Company Details</h3>
                                    <div className="form-group">
                                        <label htmlFor="companyname">Company Name</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.companyname} className="form-control" name="companyname" placeholder="e.g. New York" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-description">Company Description (Optional)</label>
                                        <ReactQuill name="company-description" theme="snow" modules={this.modules}
                                            formats={this.formats} onChange={this.companydescriptionChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="companywebsite">Website (Optional)</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.companywebsite} className="form-control" name="companywebsite" placeholder="https://" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company-website-tw d-block">Upload Logo</label> <br />
                                        <label className="btn btn-primary btn-md btn-file">
                                            Browse File<input type="file" onChange={this.handleCompanyChange} hidden />
                                        </label>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">

                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" onClick={this.handlejobpost} className="btn btn-block btn-primary btn-md">Save Job</Link>
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