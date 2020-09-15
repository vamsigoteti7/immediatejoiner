import React, { Component, createContext } from "react";
import { auth, generateUserDocument} from '../../firebase/index';
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
      if (firebaseUser) {
        var currentUser = firebaseUser;
        firebase
          .firestore()
          .collection('stripe_customers')
          .doc(currentUser.uid)
          .onSnapshot((snapshot) => {
            if (snapshot.data()) {
              var customerDataVal = snapshot.data();

              this.setState({
                allContextValue: {
                  ...this.state.allContextValue,
                  customerData: customerDataVal,
                },
              });
            } else {
              console.warn(
                `No Stripe customer found in Firestore for user: ${currentUser.uid}`
              );
            }
          });
      } else {
      }
      const userVal = await generateUserDocument(firebaseUser);

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
