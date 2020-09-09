import React from 'react';
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
// import $ from 'jquery';

class Immediatejoinerhome extends React.Component {

    //componentDidMount() {
    // $(".loader").delay(1000).fadeOut("slow");
    // $("#overlayer").delay(1000).fadeOut("slow");
    // var siteMenuClone = function () {
    //     setTimeout(function () {
    //         var counter = 0;
    //         $('.site-mobile-menu .has-children').each(function () {
    //             var $this = $(this);

    //             $this.prepend('<span class="arrow-collapse collapsed">');

    //             $this.find('.arrow-collapse').attr({
    //                 'data-toggle': 'collapse',
    //                 'data-target': '#collapseItem' + counter,
    //             });

    //             $this.find('> ul').attr({
    //                 'class': 'collapse',
    //                 'id': 'collapseItem' + counter,
    //             });

    //             counter++;

    //         });

    //     }, 1000);

    //     $('body').on('click', '.arrow-collapse', function (e) {
    //         var $this = $(this);
    //         if ($this.closest('li').find('.collapse').hasClass('show')) {
    //             $this.removeClass('active');
    //         } else {
    //             $this.addClass('active');
    //         }
    //         e.preventDefault();

    //     });

    //     $(window).resize(function () {
    //         var $this = $(this),
    //             w = $this.width();

    //         if (w > 768) {
    //             if ($('body').hasClass('offcanvas-menu')) {
    //                 $('body').removeClass('offcanvas-menu');
    //             }
    //         }
    //     })

    //     $('body').on('click', '.js-menu-toggle', function (e) {
    //         $('.js-clone-nav').each(function () {
    //             var $this = $(this);
    //             $this.attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    //         });
    //         var $this = $(this);
    //         //  e.preventDefault();

    //         if ($('body').hasClass('offcanvas-menu')) {
    //             $('body').removeClass('offcanvas-menu');
    //             $this.removeClass('active');
    //         } else {
    //             $('body').addClass('offcanvas-menu');
    //             $this.addClass('active');
    //         }
    //     })

    //     //click outisde offcanvas
    //     $(document).mouseup(function (e) {
    //         var container = $(".site-mobile-menu");
    //         if (!container.is(e.target) && container.has(e.target).length === 0) {
    //             if ($('body').hasClass('offcanvas-menu')) {
    //                 $('body').removeClass('offcanvas-menu');
    //             }
    //         }
    //     });
    // };
    // siteMenuClone();


    // var sitePlusMinus = function () {
    //     $('.js-btn-minus').on('click', function (e) {
    //         e.preventDefault();
    //         if ($(this).closest('.input-group').find('.form-control').val() !== 0) {
    //             $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
    //         } else {
    //             $(this).closest('.input-group').find('.form-control').val(parseInt(0));
    //         }
    //     });
    //     $('.js-btn-plus').on('click', function (e) {
    //         e.preventDefault();
    //         $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
    //     });
    // };
    //}

    render() {
        return (
            <div>
                {/* <div id="overlayer"></div>
                <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
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
                    <section className="home-section section-hero overlay bg-image" style={{ backgroundImage: `url(${hero_1})` }} id="home-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row mt-5"></div>
                                    <div className="row mt-5"></div>
                                    <div className="row mt-5"></div>
                                    <div className="row mt-5"></div>
                                    <div className="row mt-5"></div>
                                    <div className="row mt-5"></div>
                                    <Carousel showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-md-12">
                                                <div className="mb-5 text-center">
                                                    <h1 className="text-white font-weight-bold">India's First Low Priced Job Portal</h1>
                                                    <p>Spend 100 Rs To Post A Job</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-md-12">
                                                <div className="mb-5 text-center">
                                                    <h1 className="text-white font-weight-bold">Job Portal For Medium/Small Scale Industries</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-5 bg-image overlay-primary fixed overlay" style={{ backgroundImage: `url(${hero_1})` }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h2 className="text-white">Looking For A Job?</h2>
                                    <p className="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
                                </div>
                                <div className="col-md-3 ml-auto">
                                    <Link to="/" className="btn btn-warning btn-block btn-lg">Sign Up</Link>
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
            </div>
        );
    }
}

export default Immediatejoinerhome;
