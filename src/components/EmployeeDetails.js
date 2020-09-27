import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { storage } from '../firebase';
import { auth } from '../firebase/index';
import { toast } from "react-toastify";
import citydata from '../immediatedata/indiacitydata.json';


export class EmployeeDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phonenumber: '',
            highestqualification: '',
            percentage: '',
            resumeurl: '',
            currentsalary: '',
            age: '',
            selectedcountry: '',
            selectedcity: '',
            selectedindustry: '',
            selectedjobtype: '',
            skills: '',
            selectedexperience: '',
            countries: [
            ],
            selecteddepartment: '',
            industries: [
            ],
            cities: [
            ],
            experience: [],
            qualifications: [],
            gender: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleResumeChange = this.handleResumeChange.bind(this);
        this.handleemployeedetails = this.handleemployeedetails.bind(this);
    }

    componentDidMount() {
        this.getAllCountrys();
        this.getAllIndustries();
        this.getAllExperiences();
        this.getAllQualifications();
        this.getAllGenders();
    }

    getAllQualifications = () => {
        axios.get('/imgetqualification')
            .then(response => {
                let qualificationApi = response.data.map(data => {
                    return { value: data.Qualificationname, id: data.Qualificationid, label: data.Qualificationname };
                });
                this.setState({
                    qualifications: qualificationApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

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

    getAllCountrys = () => {
        axios.get('/imgetcountrys')
            .then(response => {
                let countriesApi = response.data.map(data => {
                    return { value: data.name, id: data.countryid, label: data.name };
                });
                this.setState({
                    countries: countriesApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getAllExperiences = () => {
        axios.get('/imgetexperience')
            .then(response => {
                let experiencesApi = response.data.map(data => {
                    return { value: data.name, id: data.experiencedocid, label: data.name };
                });
                this.setState({
                    experience: experiencesApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getAllGenders = () => {
        axios.get('/imgetgender')
            .then(response => {
                let genderApi = response.data.map(data => {
                    return { value: data.genderName, label: data.genderName };
                });
                this.setState({
                    gender: genderApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    getCityByCountryId = () => {
        this.setState({ selectedcity: '' });
        this.setState({
            cities: citydata
        });
        // const countryData = {
        //     countryid: this.state.selectedcountry.id
        // };
        // axios.post('/imgetcitybyid', countryData)
        //     .then(response => {
        //         let cityApi = response.data.map(data => {
        //             return { value: data.city, id: data.countryid, label: data.city };
        //         });

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    };

    handleemployeedetails = () => {

        const employeeData = {
            email: this.props.userid.user.username,
            phonenumber: this.state.phonenumber,
            age: this.state.age,
            gender: this.state.selectedgender.value,
            country: this.state.selectedcountry.value,
            city: this.state.selectedcity.value,
            industry: this.state.selectedindustry.value,
            highestqualification: this.state.selectedqualification.value,
            percentage: this.state.percentage,
            totalexperience: this.state.selectedexperience.value,
            skills: this.state.skills,
            resumeurl: this.state.resumeurl,
            currentsalary: this.state.currentsalary,
        };
        axios.post('/impostuserdetails', employeeData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleResumeChange = (e) => {
        if (e.target.files[0]) {
            let file_size = e.target.files[0].size / 1000000;
            if (file_size < 0.03) {
                this.setState({ resume: e.target.files[0] }, () => { this.handleResumeUpload(); });
            }
            else {
                toast.success("File Size Cannot be more than 30 KB");
            }
        }
    };

    handleResumeUpload = () => {
        const fileextension = this.state.resume.name.split('.');
        var extension = null;
        if (fileextension.length > 0) {
            extension = fileextension[fileextension.length - 1];
        }
        const uploadTask = storage.ref(`resumes/${this.props.userid.user.username + '.' + extension}`).put(this.state.resume);
        uploadTask.on(
            "state_changed",
            snapshot => {
                this.setState({
                    resumeprogress: Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                });
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("resumes")
                    .child(this.props.userid.user.username)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ resumeurl: url });
                    });
            }
        );
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
                        <div className="site-logo col-6"><Link className="js-menu-toggle" to="/">Immediate Joiner</Link></div>

                        <nav className="mx-auto site-navigation">
                            <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                <li><Link className="nav-link active js-menu-toggle" to="/">Home</Link></li>
                                <li><Link className="js-menu-toggle" to="/Empdashboard">Dashboard</Link></li>
                                <li><Link className="js-menu-toggle" to="/EmpDetails">MyProfile</Link></li>
                                <li className="d-lg-none"><Link onClick={() => { auth.signOut(); this.props.history.push('/'); }} className="js-menu-toggle" >Log Out</Link></li>
                            </ul>
                        </nav>

                        <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                            <div className="ml-auto">
                                <button onClick={() => { auth.signOut(); this.props.history.push('/'); }} className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</button>
                            </div>
                            <div to="/" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3">
                                <span className="icon-menu h3 m-0 p-0 mt-2"></span>
                            </div>
                        </div>
                        <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                            <div className="ml-auto">
                                <button onClick={() => { auth.signOut(); this.props.history.push('/'); }} className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</button>
                            </div>
                            <div to="/" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3">
                                <span className="icon-menu h3 m-0 p-0 mt-2"></span>
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
                                        <h2>Profile Details</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        {/* <Link to="/" className="btn btn-block btn-light btn-md"><span className="icon-open_in_new mr-2"></span>Preview</Link> */}
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" onClick={this.handleemployeedetails} className="btn btn-block btn-primary btn-md">Save Profile</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <form className="p-4 p-md-5 border rounded" method="post">
                                    <h3 className="text-black mb-5 border-bottom pb-2">Profile Details</h3>

                                    <div className="form-group">
                                        <label htmlFor="company-website-tw d-block">Upload Resume</label> <br />
                                        <label className="btn btn-primary btn-md btn-file">
                                            Browse File<input type="file" onChange={this.handleResumeChange} hidden />
                                        </label>
                                        <br />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phonenumber">Phone Number</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.phonenumber} className="form-control" name="phonenumber" placeholder="Enter Phone" />
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
                                        <label htmlFor="qualification">Qualification</label>
                                        <Select className="selectpicker border rounded" id="qualification" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Department"
                                            onChange={e =>
                                                this.setState({
                                                    selectedqualification: e
                                                })
                                            }
                                            options={this.state.qualifications}
                                            value={this.state.selectedqualification}>
                                            {this.state.qualifications.map(qual => (
                                                <option
                                                    key={qual.value}
                                                    value={qual.value}
                                                >
                                                    {qual.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="percentage">Percentage</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.percentage} className="form-control" name="percentage" placeholder="Enter Percentage" />
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
                                        <label htmlFor="age">Age</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.age} className="form-control" name="age" placeholder="Enter Age" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <Select className="selectpicker border rounded" name="gender" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Gender"
                                            onChange={e =>
                                                this.setState({
                                                    selectedgender: e
                                                })
                                            }
                                            options={this.state.gender}
                                            value={this.state.selectedgender}>
                                            {this.state.gender.map(gen => (
                                                <option
                                                    key={gen.value}
                                                    value={gen.value}
                                                >
                                                    {gen.value}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="skills">Skills</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.skills} className="form-control" name="skills" placeholder="Enter Skills" />
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
                                        <label htmlFor="currentsalary">Current Salary</label>
                                        <input type="text" onChange={this.handleChange} value={this.state.currentsalary} className="form-control" name="currentsalary" placeholder="Enter Current Salary" />
                                    </div>


                                </form>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">

                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="col-6">
                                        {/* <Link to="/" className="btn btn-block btn-light btn-md"><span className="icon-open_in_new mr-2"></span>Preview</Link> */}
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" onClick={this.handleemployeedetails} className="btn btn-block btn-primary btn-md">Save Profile</Link>
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

export default EmployeeDetails