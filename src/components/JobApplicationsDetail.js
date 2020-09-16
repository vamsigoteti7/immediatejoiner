import React, { Component } from 'react'
import hero_1 from '../images/hero_1.jpg';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from '../axios-immediatejoiner';
import { storageRef } from '../firebase';

export class JobApplicationsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobid: this.props.location.query,
            jobapplications: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const userData = {
            jobid: this.state.jobid
        };
        axios.post('/imuserjobapplicationsbyjobid', userData)
            .then(response => {
                let jobapplicationsApi = response.data.map(data => {
                    return {
                        percentage: data.percentage,
                        highestqualification: data.highestqualification,
                        gender: data.gender,
                        currentsalary: data.currentsalary,
                        industry: data.industry,
                        phonenumber: data.phonenumber,
                        skills: data.skills,
                        email: data.email,
                        totalexperience: data.totalexperience,
                        city: data.city,
                        age: data.age,
                        country: data.country,
                        resumeurl: data.resumeurl
                    }
                }
                );
                this.setState({
                    jobapplications: jobapplicationsApi
                });
            })
            .catch(error => {
                console.log(error);
            });
    }



    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    downloadresume = (resumeurl) => {

        var starsRef = storageRef.child(`resumes/Vamsi (1).docx`);


        starsRef.getDownloadURL().then(function (url) {
            console.log(url);
        }).catch(function (error) {
            switch (error.code) {
                case 'storage/object-not-found':

                    break;

                case 'storage/unauthorized':

                    break;

                case 'storage/canceled':

                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;

                default:
                    break;
            }
        });
    }

    render() {
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });
        // const classes = useStyles();
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
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Resume</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Experience</TableCell>
                                        <TableCell align="right">Skills</TableCell>
                                        <TableCell align="right">Place</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.jobapplications.map((row) => (
                                        <TableRow key={row.jobid}>
                                            <TableCell component="th" scope="row">
                                                <a href={row.resumeurl} download>Download</a>
                                            </TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.totalexperience}</TableCell>
                                            <TableCell align="right">{row.skills}</TableCell>
                                            <TableCell align="right">{row.city}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </section >
            </div >
        )
    }
}

export default JobApplicationsDetail