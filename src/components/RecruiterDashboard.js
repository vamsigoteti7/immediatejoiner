import React from 'react';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';

class Recruiterdashboard extends React.Component {
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
                            <div className="site-logo col-6"><Link to="/">Immediate Joiner Recruit</Link></div>

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
                                <div class="mb-5 text-center">
                                    <h1 class="text-white font-weight-bold">Place For IMMEDIATE JOINERS</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est, consequuntur perferendis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Recruiterdashboard;
