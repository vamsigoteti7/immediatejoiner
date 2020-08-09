import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    componentDidMount() {
        const data = JSON.parse(sessionStorage.getItem('userData'));
        // let data1 = data;
        // console.log(data1.data.Name);
        // console.log(data1.Name);
        this.setState({ name: data.Name })
    }
    

    render() {
        const logout = (response) => {
            console.log(response);
            this.props.history.push('/')
          }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Welcome to Dashboard
                         </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"> Welcome  :{this.state.name} </div>
                    <div className="col-sm-9">
                        <GoogleLogout
                            clientId="915227977474-b343g740rhsp8ti35cpjbfhsvr5vm5lb.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        ></GoogleLogout></div>
                    {/* <div className="col-sm-4"></div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard