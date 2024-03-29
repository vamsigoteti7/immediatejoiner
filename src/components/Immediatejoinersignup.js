import React, { Component } from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
// import { SmartToaster, toast } from 'react-smart-toaster';
import { auth, signInWithGoogle, generateUserDocument } from '../firebase/index';
import SwipeableViews from 'react-swipeable-views';
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export class Immediatejoinersignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayName: '',
            error: '',
            value: localStorage.getItem('tabindex') ? Number(localStorage.getItem('tabindex')) : 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handletabChange = this.handletabChange.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleChecked(event) {
        this.setState({ [event.target.name]: event.target.checked });
    }

    createUserWithEmailAndPasswordHandler = async (event) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
            const displayName = this.state.displayName;
            generateUserDocument(user, { displayName });
            
        }
        catch (error) {
            this.setState({ error: error.message });
        }
    };

    a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    handletabChange = (event, newValue) => {
        if (newValue !== undefined) {
            localStorage.setItem('tabindex', newValue);
            this.setState({ value: newValue });
        }
    };

    handleChangeIndex = (index) => {
        this.setState({ value: index });
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
                </section>
                <section className="site-section">
                    <div className="container">
                        <AppBar position="static" color="default">
                            <Tabs
                                value={this.state.value}
                                onChange={this.handletabChange}
                                TabIndicatorProps={{ style: { background: '#89ba16' } }}
                                indicatorColor="#89ba16"
                                textColor="#89ba16"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="Candiate Login" {...this.a11yProps(0)} />
                                <Tab label="Employer Login" {...this.a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={this.props.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabPanel value={this.state.value} index={0} dir={this.props.theme.direction}>

                                <div className="row mb-5 justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <h2 className="section-title mb-2">Sign Up To Immediate Joiner</h2>
                                        <form action="#" className="p-4 border rounded">
                                            <div className="row form-group mb-4">
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label className="text-black" htmlFor="displayname">Display Name</label>
                                                    <input autoComplete="on" type="text" className="form-control" name="displayName" value={this.state.displayName} onChange={this.handleChange} placeholder="Display Name" />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label className="text-black" htmlFor="femailregister">Email</label>
                                                    <input autoComplete="on" type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email address" />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label className="text-black" htmlFor="fpasswordregister">Password</label>
                                                    <input autoComplete="on" type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <button name="IsSignUp" onClick={event => {
                                                        this.createUserWithEmailAndPasswordHandler(event);
                                                    }} className="btn px-4 btn-primary text-white" placeholder="Is Signup" >Sign Up</button>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="text-center my-3">or</p>
                                        <button
                                            onClick={() => {
                                                try {
                                                    signInWithGoogle();
                                                } catch (error) {
                                                    console.error("Error signing in with Google", error);
                                                }
                                            }}
                                            className="btn px-4 btn-primary text-white"
                                        >
                                            Sign In with Google
        </button>
                                        <p className="text-center my-3">
                                            Already have an account?{" "}
                                            <Link to="/Login" className="text-blue-500 hover:text-blue-600">
                                                Sign in here
          </Link>{" "}
                                        </p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={this.state.value} index={1} dir={this.props.theme.direction}>

                                <div className="row mb-5 justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <h2 className="section-title mb-2">Sign Up To Immediate Joiner</h2>
                                        <form action="#" className="p-4 border rounded">
                                            <div className="row form-group mb-4">
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label className="text-black" htmlFor="displayname">Display Name</label>
                                                    <input autoComplete="on" type="text" className="form-control" name="displayName" value={this.state.displayName} onChange={this.handleChange} placeholder="Display Name" />
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label className="text-black" htmlFor="femailregister">Email</label>
                                                    <input autoComplete="on" type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email address" />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label className="text-black" htmlFor="fpasswordregister">Password</label>
                                                    <input autoComplete="on" type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <button value="Sign Up" name="IsSignUp" onClick={event => {
                                                        this.createUserWithEmailAndPasswordHandler(event);
                                                    }} className="btn px-4 btn-primary text-white" placeholder="Is Signup" >Sign Up</button>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="text-center my-3">or</p>
                                        <button
                                            onClick={() => {
                                                try {
                                                    signInWithGoogle();
                                                } catch (error) {
                                                    console.error("Error signing in with Google", error);
                                                }
                                            }}
                                            className="btn px-4 btn-primary text-white"
                                        >
                                            Sign In with Google
</button>
                                        <p className="text-center my-3">
                                            Already have an account?{" "}
                                            <Link to="/Login" className="text-blue-500 hover:text-blue-600">
                                                Sign in here
</Link>{" "}
                                        </p>
                                    </div>
                                </div>
                            </TabPanel>
                        </SwipeableViews>
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

export default withTheme(Immediatejoinersignup)