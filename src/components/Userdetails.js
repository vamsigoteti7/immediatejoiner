import React, { Component } from 'react'
import axios from '../axios-immediatejoiner';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';

export class Userdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phonenumber: '',
            location: '',
            percentage: '',
            totalexperience: '',
            highestqualification: '',
            email: '',
            jobtitle: '',
            resume: '',
            currentctc: '',
            dateofbirth: ''
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
    getallqualification = () => {
        axios.post('/imgetqualification')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleuserdetail = () => {
        const userdetailData = {
            username: this.state.username,
            phonenumber:this.state.phonenumber,
            location:this.state.location,
            percentage:this.state.percentage,
            totalexperience: this.state.totalexperience,
            highestqualification: this.state.highestqualification,
            email: this.state.email,
            jobtitle: this.state.jobtitle,
            resume:this.state.resume,
            currentctc: this.state.currentctc,
            dateofbirth: this.state.dateofbirth
        };
        axios.post('/impostuserdetails', userdetailData)
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
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                <h2 className="mb-4">Sign Up To Immediate Joiner</h2>
                                <form action="#" className="p-4 border rounded">
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="femailregister">Email</label>
                                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fpasswordregister">Password</label>
                                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="row form-group mb-4">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fretypepassword">Re-Type Password</label>
                                            <input type="password" className="form-control" name="reenterpassword" value={this.state.reenterpassword} onChange={this.handleChange} placeholder="Re-type Password" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input value="Sign Up" onClick={this.handleSignUp} className="btn px-4 btn-primary text-white" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-6">
                                <h2 className="mb-4">Log In To Immediate Joiner</h2>
                                <form action="#" className="p-4 border rounded">

                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="femail">Email</label>
                                            <input value={this.state.email} type="text" id="femail" className="form-control" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="row form-group mb-4">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fpassword">Password</label>
                                            <input value={this.state.password} type="password" id="fpassword" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input value="Log In"
                                                onClick={this.handleLogin}
                                                className="btn px-4 btn-primary text-white" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        )
    }
}

export default Postajob