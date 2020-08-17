import React from 'react';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";

class Immediatejoinerhome extends React.Component {
    render() {
        return (
            <div className="site-wrap">
                <div class="site-mobile-menu site-navbar-target">
                    <div class="site-mobile-menu-header">
                        <div class="site-mobile-menu-close mt-3">
                            <span class="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div class="site-mobile-menu-body"></div>
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
                                </ul>
                            </nav>

                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <Link to="/Login" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</Link>
                                </div>
                                <a href="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                            </div>

                        </div>
                    </div>
                </header>
                <section className="home-section section-hero overlay bg-image" style={{ backgroundImage: `url(${hero_1})` }} id="home-section">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-12">
                                <Carousel>
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-md-12">
                                            <div class="mb-5 text-center">
                                                <h1 class="text-white font-weight-bold">Place For IMMEDIATE JOINERS</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est, consequuntur perferendis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-md-12">
                                            <div class="mb-5 text-center">
                                                <h1 class="text-white font-weight-bold">Spend 100 Rs to post a job</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est, consequuntur perferendis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                    <div>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-5 bg-image overlay-primary fixed overlay" style={{ backgroundImage: `url(${hero_1})` }}>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h2 class="text-white">Looking For A Job?</h2>
                                <p class="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
                            </div>
                            <div class="col-md-3 ml-auto">
                                <a href="#" class="btn btn-warning btn-block btn-lg">Sign Up</a>
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
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Graphic Design</a></li>
                                    <li><a href="#">Web Developers</a></li>
                                    <li><a href="#">Python</a></li>
                                    <li><a href="#">HTML5</a></li>
                                    <li><a href="#">CSS3</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3 mb-4 mb-md-0">
                                <h3>Company</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Resources</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3 mb-4 mb-md-0">
                                <h3>Support</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3 mb-4 mb-md-0">
                                <h3>Contact Us</h3>
                                <div className="footer-social">
                                    <a href="#"><span className="icon-facebook"></span></a>
                                    <a href="#"><span className="icon-twitter"></span></a>
                                    <a href="#"><span className="icon-instagram"></span></a>
                                    <a href="#"><span className="icon-linkedin"></span></a>
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
        );
    }
}

export default Immediatejoinerhome;
