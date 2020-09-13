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
              // this.startDataListeners(currentUser);
              // document.getElementById('loader').style.display = 'none';
              // document.getElementById('content').style.display = 'block';
            } else {
              console.warn(
                `No Stripe customer found in Firestore for user: ${currentUser.uid}`
              );
            }
          });
      } else {
        // document.getElementById('content').style.display = 'none';
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
    // const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

    const { allContextValue } = this.state;
    // user.customerData = this.state.customerData;
    // const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
    // const elements = stripe.elements();
    // const cardElement = elements.create('card');
    // cardElement.mount('#card-element');
    // cardElement.on('change', ({ error }) => {
    //   const displayError = document.getElementById('error-message');
    //   if (error) {
    //     displayError.textContent = error.message;
    //   } else {
    //     displayError.textContent = '';
    //   }
    // });

    return (
      <UserContext.Provider value={allContextValue}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
