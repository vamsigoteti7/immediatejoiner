import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from '../../firebase/index';
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
          .collection('stripe_transactions')
          .get()
          .then(response => {
            const fetchedMovies = [];
            response.forEach(document => {
              const fetchedMovie = {
                id: document.id,
                ...document.data()
              };
              fetchedMovies.push(fetchedMovie);
            });
            //setMovies(fetchedMovies);
          })
          .catch(error => {
            // setError(error);
          });
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
