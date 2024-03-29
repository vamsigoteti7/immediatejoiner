import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import hero_1 from '../images/hero_1.jpg';
import axios from '../axios-immediatejoiner';
import { auth } from '../firebase/index';

const useStyles = theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(0, 0, 0),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
});

class MembershipPlans extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentuserid: '',
            currency: '',
            amount: '',
            error: '',
            plandetail: '',
            membershiptype: this.props.userid.user.usertype,
            tiers: [],
            payment: []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getpaymentdetails();
    }

    getpaymentdetails = () => {
        const userData = {
            userid: this.props.userid.user.uid
        };
        axios.post('/getuserpaymentbyid', userData)
            .then(response => {
                if (response.data.length === 0) {
                    this.getMembershipPlans();
                }
                else {
                    const data1 = response.data[0];
                    if (this.state.membershiptype === "Candiate") {
                        this.props.history.push('/Empdashboard');
                    }
                    else if (this.state.membershiptype === "Recruiter") {
                        this.props.history.push('/RecruiterDashboard');
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    getMembershipPlans = () => {
        const userData = {
            membertype: this.state.membershiptype
        };
        axios.post('/getmembershipplans', userData)
            .then(response => {
                this.setState({ tiers: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
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
                        </div>
                    </header>
                    <section className="section-hero overlay inner-page bg-image" style={{ backgroundImage: `url(${hero_1})` }} id="home-section">
                    </section>
                    <section className="site-section">
                        <div className="container">
                            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Plans
                    </Typography>

                            </Container>
                            <Container maxWidth="md" align="center" component="main">
                                <Grid container spacing={5} align="center">
                                    {this.state.tiers.map((tier) => (
                                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
                                            <Card>
                                                <CardHeader
                                                    title={tier.title}
                                                    subheader={tier.subheader}
                                                    titleTypographyProps={{ align: 'center' }}
                                                    subheaderTypographyProps={{ align: 'center' }}
                                                    className={classes.cardHeader}
                                                />
                                                <CardContent>
                                                    <div className={classes.cardPricing}>
                                                        <Typography component="h2" variant="h3" color="textPrimary">
                                                            USD{(tier.price / 100).toFixed(2)}
                                                        </Typography>
                                                    </div>
                                                    <ul>
                                                        {tier.description.map((line) => (
                                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                                {line}
                                                            </Typography>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                                <CardActionArea component={RouterLink} to={{ pathname: '/Payment', query: tier }}>
                                                    <CardContent>
                                                        <Typography className="btn px-4 btn-primary text-white" component="button">{tier.buttonText}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>

                            </Container>
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


            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(MembershipPlans);