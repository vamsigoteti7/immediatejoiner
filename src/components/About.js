import React from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';

class About extends React.Component {
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
                                    <li><Link to="/" className="nav-link active">Home</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li><Link to="/Contactus">Contact</Link></li>
                                    <li className="d-lg-none"><Link to="/Login">Log In</Link></li>
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

                <section className="site-section" id="next-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <form action="#" className="">

                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" for="fname">First Name</label>
                                            <input type="text" name="firstname" value={this.state.firstName} onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" for="lname">Last Name</label>
                                            <input type="text" id="lname" className="form-control" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" for="email">Email</label>
                                            <input type="email" id="email" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" for="subject">Subject</label>
                                            <input type="subject" id="subject" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" for="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input onClick={this.handleSubmit} value="Send Message" className="btn btn-primary btn-md text-white" />
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div >);
    }
}

export default About;
