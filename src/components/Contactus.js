import React from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import axios from '../axios-immediatejoiner';

class Contactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            message: '',
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleContactUs = () => {
        const contactusData = {
            firstname: this.state.firstName,
            email: this.state.email,
            lastname: this.state.lastName,
            subject: this.state.subject
        };
        axios.post('/impostcontactus', contactusData)
            .then(response => {
                if (response.data.length === 1) {

                }
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
                            <div className="site-logo col-6"><Link className="js-menu-toggle" to="/">Immediate Joiner</Link></div>

                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li><Link className="nav-link active js-menu-toggle" to="/">Home</Link></li>
                                    <li><Link className="js-menu-toggle" to="/About">About</Link></li>
                                    <li><Link className="js-menu-toggle" to="/Contactus">Contact</Link></li>
                                    <li className="d-lg-none"><Link className="js-menu-toggle" to="/Login">Log In</Link></li>
                                </ul>
                            </nav>
                            {/* <Navbar bg="transparent" expand="lg" style={{ width: 400 }}>
                                <Navbar.Brand className="site-logo col-6" href="/">Immediate Joiner</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">About</Nav.Link>
                                        <Nav.Link href="#link">Contactus</Nav.Link>
                                    </Nav>
                                    <Form inline>
                                        <Button>Log In</Button>
                                    </Form>
                                </Navbar.Collapse>
                                </Navbar> */}

                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <Link to="/Login" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</Link>
                                </div>
                                <div to="/" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3">
                                    <span className="icon-menu h3 m-0 p-0 mt-2"></span>
                                </div>
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

                <section className="site-section" id="next-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 className="section-title mb-2">Contact Us</h2>
                            </div>

                        </div>
                        <div className="row mb-5 justify-content-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <form action="#" className="">

                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fname">First Name</label>
                                            <input type="text" name="firstname" value={this.state.firstName} onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div class="col-md-6">
                                            <label className="text-black" htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" value={this.state.lastname} className="form-control" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="email">Email</label>
                                            <input type="email" id="email" value={this.state.email} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="subject">Subject</label>
                                            <input type="subject" id="subject" value={this.state.subject} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="message">Message</label>
                                            <textarea name="message" id="message" value={this.state.message} cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input onClick={this.handleContactUs} value="Send Message" className="btn btn-primary btn-md text-white" />
                                        </div>
                                    </div>
                                </form>
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
            </div >);
    }
}

export default Contactus;
