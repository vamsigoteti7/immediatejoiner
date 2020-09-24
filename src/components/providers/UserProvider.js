import React, { Component, createContext } from "react";
import { auth,  generateUserDocument } from '../../firebase/index';
import firebase from "firebase/app";
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
      const token = await firebase.auth().currentUser.getIdToken(true);
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
