import React, { Component, createContext } from "react";
import { auth,  generateUserDocument } from '../../firebase/index';
import firebase from "firebase/app";
import axios from '../../axios-immediatejoiner';
import { DefaultToast } from 'react-toast-notifications';
import { toast } from "react-toastify";
export const UserContext = createContext({ user: null });

class UserProvider extends Component {

  state = {
    allContextValue: {
      user: null,
      customerdata: null
    }
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async firebaseUser => {
      const userVal = await generateUserDocument(firebaseUser);
      try {
        const token = await firebase.auth().currentUser.getIdToken(true);  
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        toast.success("Logged In Sucessfully", {
           className: 
             { color: "black", fontFamily: "georgia" }});
             
      } catch (error) {
        console.log(error);
      }
      
      this.setState({
        allContextValue: {
          ...this.state.allContextValue,
          user: userVal,
        },
      });
      
    });
  };

  render() {
    const { allContextValue } = this.state;
    return (
      <UserContext.Provider value={allContextValue}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
