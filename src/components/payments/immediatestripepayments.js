import React from 'react'
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import hero_1 from '../../images/hero_1.jpg';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import Immediatepayment from './Immediatepayment';


class Immediatestripepayments extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      const stripePromise = loadStripe('pk_test_51HL4l2FTZGo3gXDdM3fMEyMnJVuAP3ASpTzBR4EEFo9ZjLScOt5ObuWOdadfwJwUd6GXmqh0N4OYWCVFHMyYcMCv00z57Vbv5V');
      const userid = this.props.userid
      var plan = this.props.location.query;
      return (
          <Elements stripe={stripePromise}>
              <ElementsConsumer>
                  {({ stripe, elements }) => (
                      <Immediatepayment userid={userid} plan={plan}  stripe={stripe} elements={elements} />
                  )}
              </ElementsConsumer>
          </Elements>
      );
    }
}

export default Immediatestripepayments;